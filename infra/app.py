import subprocess
import pandas as pd
import os
import json
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import asyncio
import aiofiles

from db import store_json_to_mongodb

async def run_volatility_command(command: str, output_file: str):
    stdErr=[]
    try:
        print('Command Exec Started')
        process = await asyncio.create_subprocess_shell(
            command, stdout=subprocess.PIPE, stderr=subprocess.STDOUT
        )
        
        async with aiofiles.open(output_file, "w") as file:
            async for line in process.stdout:
                await file.write(line.decode())
            async for line in process.stderr:
                stdErr.append(line)
        
        await process.communicate()  # Wait for the process to complete

        if process.returncode != 0:
            raise Exception("Command failed with non-zero exit code")

        print("Command executed successfully")
    except Exception as e:
        print(f"An error occurred: {str(e)}")
        print(f"StdErr: {str(stdErr)}")

async def parse_output_to_csv(log_file: str, csv_file: str):
    try:
        print('Parsing output to csv')
        async with aiofiles.open(log_file, "r") as file:
            lines = await file.readlines()

        table_start_index = next(i for i, line in enumerate(lines) if line.startswith("PID"))
        headers = lines[table_start_index].strip().split()
        data_lines = lines[table_start_index + 1:]

        data = []
        for line in data_lines:
            data.append(line.strip().split())

        df = pd.DataFrame(data, columns=headers)
        df.to_csv(csv_file, index=False)
        print(f"Output stored in {csv_file}")
    except Exception as e:
        print(f"An error occurred while parsing the output: {str(e)}")

async def parse_output_to_json(log_file: str, json_file: str):
    try:
        print("Parsing Output to JSON")
        async with aiofiles.open(log_file, "r") as file:
            lines = await file.readlines()

        table_start_index = next(i for i, line in enumerate(lines) if line.startswith("PID"))
        headers = lines[table_start_index].strip().split()
        data_lines = lines[table_start_index + 1:]

        data = []
        faulty_rows_count = 0

        for line in data_lines:
            values = line.strip().split()
            if len(values) == len(headers):
                entry = {headers[i]: values[i] for i in range(len(values))}
                data.append(entry)
            else:
                faulty_rows_count += 1

        async with aiofiles.open(json_file, "w") as file:
            await file.write(json.dumps(data, indent=4))
        
        print(f"Output stored in {json_file}")
        print(f"Number of faulty rows: {faulty_rows_count}")
    except Exception as e:
        print(f"An error occurred while parsing the output: {str(e)}")

app = FastAPI()

@app.exception_handler(Exception)
async def global_exception_handler(request, exc):
    return ExecResponse(success=False, message=str(exc)), 500

class ExecRequest(BaseModel):
    clerkId: str
    memoryId: str
    command: str
    requestId: str

class ExecResponse(BaseModel):
    success: bool
    message: str = None
    output: dict = None

@app.post("/exec", response_model=ExecResponse)
async def exec_command(request: ExecRequest):
    try:
        await run_volatility_command(request.command, "command_output.log")
        await parse_output_to_json("command_output.log", "command_output.json")
        await store_json_to_mongodb("command_output.json", request.clerkId, "outputs", request.requestId)
        output = {
            "clerkId": request.clerkId,
            "memoryId": request.memoryId,
            "command": request.command,
        }        
        return ExecResponse(success=True, output=output)

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

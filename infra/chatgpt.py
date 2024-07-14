import subprocess
import pandas as pd
import os
import json
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import asyncio
import aiofiles

from db import store_json_to_mongodb

app = FastAPI()

# class ExecRequest(BaseModel):
#     clerkId: str
#     memoryId: str
#     command: str
#     requestId: str

# class ExecResponse(BaseModel):
#     success: bool
#     message: str = None
#     output: dict = None

async def run_volatility_command(command, output_file):
    try:
        print('Command Exec Started')
        process = await asyncio.create_subprocess_shell(
            command, stdout=subprocess.PIPE, stderr=subprocess.PIPE
        )
        
        async with aiofiles.open(output_file, "w") as file:
            async for line in process.stdout:
                await file.write(line.decode())
                
            async for line in process.stderr:
                await file.write(line.decode())

        await process.communicate()  # Wait for the process to complete

        if process.returncode != 0:
            raise Exception(f"Command failed with non-zero exit code {process.returncode}")

        print("Command executed successfully")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error executing command: {str(e)}")

async def parse_output_to_json(log_file, json_file):
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
        raise HTTPException(status_code=500, detail=f"Error parsing output to JSON: {str(e)}")

@app.exception_handler(Exception)
async def global_exception_handler(request, exc):
    return {"success": False, "message": str(exc)}, 500

@app.post("/exec")
async def exec_command(request):
    try:
        print(request.command)
        await run_volatility_command(request.command, "command_output.log")
        await parse_output_to_json("command_output.log", "command_output.json")
        await store_json_to_mongodb("command_output.json", request.clerkId, "outputs", request.requestId)
        
        output = {
            "clerkId": request.clerkId,
            "memoryId": request.memoryId,
            "command": request.command,
        }
        
        return {"success": True, "output": output}

    except HTTPException as http_exc:
        raise http_exc
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


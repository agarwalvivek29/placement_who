# import subprocess
# import pandas as pd
# import os
# import json
# from fastapi import FastAPI, HTTPException
# from pydantic import BaseModel
# import asyncio
# import aiofiles

# from db import store_json_to_mongodb

# def run_volatility_command(command: str, output_file: str):
#     try:
#         with open(output_file, "w") as file:
#             process = subprocess.Popen(command, shell=True, stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
            
#             for line in process.stdout:
#                 file.write(line.decode())
            
#             process.communicate()  # Wait for the process to complete

#         if process.returncode != 0:
#             raise Exception("Command failed with non-zero exit code")

#         print("Command executed successfully")
#     except Exception as e:
#         print(f"An error occurred: {str(e)}")

# def parse_output_to_csv(log_file: str, csv_file: str):
#     try:
#         with open(log_file, "r") as file:
#             lines = file.readlines()

#         # Assuming the table starts after a specific line
#         table_start_index = next(i for i, line in enumerate(lines) if line.startswith("PID"))
#         headers = lines[table_start_index].strip().split()
#         data_lines = lines[table_start_index + 1:]

#         data = []
#         for line in data_lines:
#             data.append(line.strip().split())

#         df = pd.DataFrame(data, columns=headers)
#         df.to_csv(csv_file, index=False)
#         print(f"Output stored in {csv_file}")
#     except Exception as e:
#         print(f"An error occurred while parsing the output: {str(e)}")

# def parse_output_to_json(log_file: str, json_file: str):
#     try:
#         with open(log_file, "r") as file:
#             lines = file.readlines()

#         # Assuming the table starts after a specific line
#         table_start_index = next(i for i, line in enumerate(lines) if line.startswith("PID"))
#         headers = lines[table_start_index].strip().split()
#         data_lines = lines[table_start_index + 1:]

#         data = []
#         faulty_rows_count = 0

#         for line in data_lines:
#             values = line.strip().split()
#             if len(values) == len(headers):
#                 entry = {headers[i]: values[i] for i in range(len(values))}
#                 data.append(entry)
#             else:
#                 faulty_rows_count += 1

#         with open(json_file, "w") as file:
#             json.dump(data, file, indent=4)
        
#         print(f"Output stored in {json_file}")
#         print(f"Number of faulty rows: {faulty_rows_count}")
#     except Exception as e:
#         print(f"An error occurred while parsing the output: {str(e)}")

# app = FastAPI()

# # Exception handling middleware
# @app.exception_handler(Exception)
# async def global_exception_handler(request, exc):
#     return ExecResponse(success=False, message=str(exc)), 500

# # Define the request model
# class ExecRequest(BaseModel):
#     clerkId: str
#     memoryId: str
#     command: str
#     requestId: str

# # Define the response model
# class ExecResponse(BaseModel):
#     success: bool
#     message: str = None
#     output: dict = None

# # POST route for executing command
# @app.post("/exec", response_model=ExecResponse)
# def exec_command(request: ExecRequest):
#     try:
#         # Example logic to execute the command and generate output
#         run_volatility_command(request.command, "command_output.log")
#         parse_output_to_json("command_output.log","command_output.json")
#         store_json_to_mongodb("command_output.json", request.clerkId, "outputs", request.requestId)
#         output = {
#             "clerkId": request.clerkId,
#             "memoryId": request.memoryId,
#             "command": request.command,
#             "result": ""
#         }        
#         return ExecResponse(success=True, output=output)

#     except Exception as e:
#         raise HTTPException(status_code=500, detail=str(e))

# # if __name__ == "__main__":
# #     command = r"python C:\Users\amans\volatility3\vol.py -f D:\memory_dump\memdump.mem windows.pslist"
# #     log_file = "command_output.log"
# #     csv_file = "command_output.csv"
# #     json_file = "command_output.json"

#     # run_volatility_command(command, log_file)
#     # parse_output_to_json(log_file, json_file)
#     # parse_output_to_csv(log_file, csv_file)

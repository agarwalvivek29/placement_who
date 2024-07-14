from fastapi import FastAPI, HTTPException, status
import json
from pydantic import BaseModel
from execute_command import execute

app = FastAPI()

class CommandRequest(BaseModel):
    command: str
    clerkId: str

def fetch_logfile_content() -> str:
    try:
        logfile_path = 'output_command.log'  # Replace with actual path to your logfile
        with open(logfile_path, 'r') as f:
            content = f.read()
        return content
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"Error fetching logfile: {str(e)}") 

@app.post('/exec')
def execFunction(request : CommandRequest):
    try:
        result = execute(request.command)
        content = fetch_logfile_content()
        if result:
            return {
                "success": True, 
                "result": "Command executed successfully.",
                "output": content
            }
        else:
            return {
                "success": False,
                "err" : "Internal Error"
            }
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"Internal server error: {str(e)}")
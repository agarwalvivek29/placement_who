import subprocess
import json

def execute(command):
    try:
        print('Start Exec Command')
        with open('output_command.log','w') as f:
            process = subprocess.Popen(command.split(), stdout=f)
            return_code = process.wait()
        if return_code == 0:
            print(f"Command '{command}' executed successfully. Output saved to 'output_command.log'.")
            return True
        else:
            print(f"Command '{command}' failed with return code {return_code}.")
            return False

    except Exception as e:
        print(str(e))

# execute('python C:\\Users\\amans\\volatility3\\vol.py -f D:\\memory_dump\\memdump.mem windows.pslist')
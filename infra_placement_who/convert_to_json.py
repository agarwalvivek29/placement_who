import re

def parse_log_file():
    objects = []
    headers = None
    
    with open("output_command.log", 'r') as f:
        for line in f:
            line = line.strip()
            
            # Skip empty lines
            if not line:
                continue
            
            # Check if this line contains the header with "PID"
            if "PID" in line:
                # Extract headers from the line
                headers = re.split(r'\s{2,}', line.strip())
                continue
            
            if headers:
                # Split line into fields based on the headers
                fields = re.split(r'\s{2,}', line.strip())
                
                # Create an object dictionary
                obj = {}
                for i, header in enumerate(headers):
                    if i < len(fields):
                        obj[header] = fields[i]
                
                # Append object to the list
                objects.append(obj)
    return objects

# parse_log_file()
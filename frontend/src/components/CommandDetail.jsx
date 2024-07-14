import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import "./CommandDetail.css";

import commands from '../commands';
import { useUser } from '@clerk/clerk-react';
import { toast } from 'sonner';
import LogfileOverlay from './OverlayLog';

const CommandDetail = () => {
    const { command } = useParams();
    const commandDetail = commands.find(cmd => cmd.name === command);
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:8000/api/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ prompt }),
            });
            const data = await res.json();
            setResponse(data.response);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const { isSignedIn, user } = useUser();
    const [data,setData] = useState(false);

    const handleScanMalicious = async (command) => {
        try {
            // if(!isSignedIn){
            //     toast.info("Sign In to Continue");
            //     return
            // }
            toast('Executing Function');
            const res = await fetch('http://localhost:8000/exec', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    command,
                    clerkId : "crazzzyyy"
                }),  // Adjust as needed
            });
            const data = await res.json();
            console.log(data)  // Handle response appropriately
            if(data.output){
                setData(data.output)
                toast('Data Fetched Successfully')
                return;
            }
            toast('Something went wrong, see logs using the api simulator...')
        } catch (error) {
            console.error('Error:', error);
            toast('Somthing Went wrong');
        }
    };

    if (!commandDetail) {
        return <h2 className="text-danger">Command not found!</h2>;
    }

    return (
        <div className="container text-white mt-4">
            <div className="command-detail-container bg-dark p-4 shadow-lg rounded">
                <h2 className="text-center">{commandDetail.name}</h2>
                <p>{commandDetail.description}</p>
                <h5>Usage:</h5>
                <pre className="bg-secondary p-3 rounded">{commandDetail.command('<vol.py>','<your_memory_dump_file_location>')}</pre>
                <button onClick={()=>{
                    const newCommand = commandDetail.command('C:\\Users\\amans\\volatility3\\vol.py', 'D:\\memory_dump\\memdump.mem')
                    console.log(newCommand)
                    handleScanMalicious(newCommand)
                }} className="btn btn-primary mt-3">Perform Analysis</button>
            </div>
            <LogfileOverlay logfileContent={data}/>
        </div>
    );
};

export default CommandDetail;
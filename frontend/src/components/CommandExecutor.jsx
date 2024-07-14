import React, { useState, useEffect } from 'react';
import { executeCommand, getCommandResult } from '../utils/api';

const CommandExecutor = () => {
    const [memoryDumpId, setMemoryDumpId] = useState('');
    const [command, setCommand] = useState('');
    const [requestId, setRequestId] = useState(null);
    const [outputId, setOutputId] = useState(null);
    const [intervalId, setIntervalId] = useState(null);

    const handleExecute = async () => {
        const id = await executeCommand(memoryDumpId, command);
        setRequestId(id);

        const interval = setInterval(async () => {
            const result = await getCommandResult(id);

            if (result.outputId) {
                setOutputId(result.outputId);
                clearInterval(interval);
            }
        }, 30000);

        setIntervalId(interval);
    };

    useEffect(() => {
        return () => {
            if (intervalId) clearInterval(intervalId);
        };
    }, [intervalId]);

    return (
        <div>
            <input 
                type="text" 
                placeholder="Memory Dump ID" 
                value={memoryDumpId} 
                onChange={(e) => setMemoryDumpId(e.target.value)} 
            />
            <input 
                type="text" 
                placeholder="Command" 
                value={command} 
                onChange={(e) => setCommand(e.target.value)} 
            />
            <button onClick={handleExecute}>Execute</button>
            {outputId && <p>Output ID: {outputId}</p>}
        </div>
    );
};

export default CommandExecutor;


// import React from 'react';
// import { useParams } from 'react-router-dom';
// import "./CommandDetail.css";
// const commands = [
//     { name: 'imageinfo', description: 'Provides info about the memory dump.', command: 'volatility -f memory_dump.raw imageinfo' },
//     { name: 'pslist', description: 'Lists all processes.', command: 'volatility -f memory_dump.raw --profile=Win7SP1x64 pslist' },
//     { name: 'pstree', description: 'Shows processes in tree structure.', command: 'volatility -f memory_dump.raw --profile=Win7SP1x64 pstree' },
//     { name: 'dlllist', description: 'Lists loaded DLLs.', command: 'volatility -f memory_dump.raw --profile=Win7SP1x64 dlllist' },
//     { name: 'handles', description: 'Displays handles opened by processes.', command: 'volatility -f memory_dump.raw --profile=Win7SP1x64 handles' },
//     { name: 'cmdscan', description: 'Retrieves command history.', command: 'volatility -f memory_dump.raw --profile=Win7SP1x64 cmdscan' },
//     { name: 'consoles', description: 'Extracts console input/output.', command: 'volatility -f memory_dump.raw --profile=Win7SP1x64 consoles' },
//     { name: 'filescan', description: 'Scans for file objects.', command: 'volatility -f memory_dump.raw --profile=Win7SP1x64 filescan' },
//     { name: 'dumpfiles', description: 'Dumps content of files.', command: 'volatility -f memory_dump.raw --profile=Win7SP1x64 dumpfiles -D /output_directory' },
//     { name: 'netscan', description: 'Scans for network connections.', command: 'volatility -f memory_dump.raw --profile=Win7SP1x64 netscan' },
//     { name: 'malfind', description: 'Detects suspicious memory regions.', command: 'volatility -f memory_dump.raw --profile=Win7SP1x64 malfind' },
//     { name: 'shimcache', description: 'Retrieves Shim Cache data.', command: 'volatility -f memory_dump.raw --profile=Win7SP1x64 shimcache' },
// ];

// const CommandDetail = () => {
//     const { command } = useParams();
//     const commandDetail = commands.find(cmd => cmd.name === command);

//     if (!commandDetail) {
//         return <h2>Command not found!</h2>;
//     }

//     return (
//         <div className="container text-white mt-4">
//             <h2>{commandDetail.name}</h2>
//             <p>{commandDetail.description}</p>
//             <h5>Usage:</h5>
//             <pre>{commandDetail.command}</pre>
//             {/* Add more demo functionality as needed */}
//         </div>
//     );
// };

// export default CommandDetail;




// //working
// import React from 'react';
// import { useParams } from 'react-router-dom';
// import "./CommandDetail.css";

// const commands = [
//     { name: 'imageinfo', description: 'Provides info about the memory dump.', command: 'volatility -f memory_dump.raw imageinfo' },
//     { name: 'pslist', description: 'Lists all processes.', command: 'volatility -f memory_dump.raw --profile=Win7SP1x64 pslist' },
//     { name: 'pstree', description: 'Shows processes in tree structure.', command: 'volatility -f memory_dump.raw --profile=Win7SP1x64 pstree' },
//     { name: 'dlllist', description: 'Lists loaded DLLs.', command: 'volatility -f memory_dump.raw --profile=Win7SP1x64 dlllist' },
//     { name: 'handles', description: 'Displays handles opened by processes.', command: 'volatility -f memory_dump.raw --profile=Win7SP1x64 handles' },
//     { name: 'cmdscan', description: 'Retrieves command history.', command: 'volatility -f memory_dump.raw --profile=Win7SP1x64 cmdscan' },
//     { name: 'consoles', description: 'Extracts console input/output.', command: 'volatility -f memory_dump.raw --profile=Win7SP1x64 consoles' },
//     { name: 'filescan', description: 'Scans for file objects.', command: 'volatility -f memory_dump.raw --profile=Win7SP1x64 filescan' },
//     { name: 'dumpfiles', description: 'Dumps content of files.', command: 'volatility -f memory_dump.raw --profile=Win7SP1x64 dumpfiles -D /output_directory' },
//     { name: 'netscan', description: 'Scans for network connections.', command: 'volatility -f memory_dump.raw --profile=Win7SP1x64 netscan' },
//     { name: 'malfind', description: 'Detects suspicious memory regions.', command: 'volatility -f memory_dump.raw --profile=Win7SP1x64 malfind' },
//     { name: 'shimcache', description: 'Retrieves Shim Cache data.', command: 'volatility -f memory_dump.raw --profile=Win7SP1x64 shimcache' },
// ];

// const CommandDetail = () => {
//     const { command } = useParams();
//     const commandDetail = commands.find(cmd => cmd.name === command);

//     if (!commandDetail) {
//         return <h2 className="text-danger">Command not found!</h2>;
//     }

//     return (
//         <div className="container text-white mt-4 ">
//             <div className="command-detail-container bg-dark p-4 shadow-lg rounded">
//                 <h2 className="text-center">{commandDetail.name}</h2>
//                 <p>{commandDetail.description}</p>
//                 <h5>Usage:</h5>
//                 <pre className="bg-secondary p-3 rounded">{commandDetail.command}</pre>
//                 {/* Add more demo functionality as needed */}
//             </div>
//         </div>
//     );
// };

// export default CommandDetail;




// src/CommandDetail.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import "./CommandDetail.css";

const commands = [
    { name: 'imageinfo', description: 'Provides info about the memory dump.', command: 'volatility -f memory_dump.raw imageinfo' },
    { name: 'pslist', description: 'Lists all processes.', command: 'volatility -f memory_dump.raw --profile=Win7SP1x64 pslist' },
    { name: 'pstree', description: 'Shows processes in tree structure.', command: 'volatility -f memory_dump.raw --profile=Win7SP1x64 pstree' },
    { name: 'dlllist', description: 'Lists loaded DLLs.', command: 'volatility -f memory_dump.raw --profile=Win7SP1x64 dlllist' },
    { name: 'handles', description: 'Displays handles opened by processes.', command: 'volatility -f memory_dump.raw --profile=Win7SP1x64 handles' },
    { name: 'cmdscan', description: 'Retrieves command history.', command: 'volatility -f memory_dump.raw --profile=Win7SP1x64 cmdscan' },
    { name: 'consoles', description: 'Extracts console input/output.', command: 'volatility -f memory_dump.raw --profile=Win7SP1x64 consoles' },
    { name: 'filescan', description: 'Scans for file objects.', command: 'volatility -f memory_dump.raw --profile=Win7SP1x64 filescan' },
    { name: 'dumpfiles', description: 'Dumps content of files.', command: 'volatility -f memory_dump.raw --profile=Win7SP1x64 dumpfiles -D /output_directory' },
    { name: 'netscan', description: 'Scans for network connections.', command: 'volatility -f memory_dump.raw --profile=Win7SP1x64 netscan' },
    { name: 'malfind', description: 'Detects suspicious memory regions.', command: 'volatility -f memory_dump.raw --profile=Win7SP1x64 malfind' },
    { name: 'shimcache', description: 'Retrieves Shim Cache data.', command: 'volatility -f memory_dump.raw --profile=Win7SP1x64 shimcache' },
];

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

    if (!commandDetail) {
        return <h2 className="text-danger">Command not found!</h2>;
    }

    return (
        <div className="container text-white mt-4 ">
            <div className="command-detail-container bg-dark p-4 shadow-lg rounded">
                <h2 className="text-center">{commandDetail.name}</h2>
                <p>{commandDetail.description}</p>
                <h5>Usage:</h5>
                <pre className="bg-secondary p-3 rounded">{commandDetail.command}</pre>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="prompt">Enter your prompt:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="prompt"
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary mt-3">Submit</button>
                </form>
                {response && (
                    <div className="mt-4">
                        <h5>Response:</h5>
                        <pre className="bg-secondary p-3 rounded">{response}</pre>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CommandDetail;

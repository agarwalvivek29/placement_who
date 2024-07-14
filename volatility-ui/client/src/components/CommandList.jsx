


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

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

// const CommandList = () => {
//     const [search, setSearch] = useState('');

//     const filteredCommands = commands.filter(cmd =>
//         cmd.name.toLowerCase().includes(search.toLowerCase())
//     );

//     return (
//         <div className="mt-4">
//             <input
//                 type="text"
//                 placeholder="Search commands..."
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 className="form-control mb-3"
//             />
//             <ul className="list-group">
//                 {filteredCommands.map((cmd) => (
//                     <li key={cmd.name} className="list-group-item d-flex justify-content-between align-items-center">
//                         <div>
//                             <strong>{cmd.name}</strong>: {cmd.description}
//                         </div>
//                         <Link to={`/${cmd.name}`} className="btn btn-primary">View More</Link>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default CommandList;










// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './CommandList.css'; 

// const commands = [
//          { name: 'imageinfo', description: 'Provides info about the memory dump.', command: 'volatility -f memory_dump.raw imageinfo' },
//          { name: 'pslist', description: 'Lists all processes.', command: 'volatility -f memory_dump.raw --profile=Win7SP1x64 pslist' },
//          { name: 'pstree', description: 'Shows processes in tree structure.', command: 'volatility -f memory_dump.raw --profile=Win7SP1x64 pstree' },
//          { name: 'dlllist', description: 'Lists loaded DLLs.', command: 'volatility -f memory_dump.raw --profile=Win7SP1x64 dlllist' },
//          { name: 'handles', description: 'Displays handles opened by processes.', command: 'volatility -f memory_dump.raw --profile=Win7SP1x64 handles' },
//          { name: 'cmdscan', description: 'Retrieves command history.', command: 'volatility -f memory_dump.raw --profile=Win7SP1x64 cmdscan' },
//          { name: 'consoles', description: 'Extracts console input/output.', command: 'volatility -f memory_dump.raw --profile=Win7SP1x64 consoles' },
//          { name: 'filescan', description: 'Scans for file objects.', command: 'volatility -f memory_dump.raw --profile=Win7SP1x64 filescan' },
//          { name: 'dumpfiles', description: 'Dumps content of files.', command: 'volatility -f memory_dump.raw --profile=Win7SP1x64 dumpfiles -D /output_directory' },
//          { name: 'netscan', description: 'Scans for network connections.', command: 'volatility -f memory_dump.raw --profile=Win7SP1x64 netscan' },
//          { name: 'malfind', description: 'Detects suspicious memory regions.', command: 'volatility -f memory_dump.raw --profile=Win7SP1x64 malfind' },
//          { name: 'shimcache', description: 'Retrieves Shim Cache data.', command: 'volatility -f memory_dump.raw --profile=Win7SP1x64 shimcache' },
//      ];
// const CommandList = () => {
//     const [search, setSearch] = useState('');

//     const filteredCommands = commands.filter(cmd =>
//         cmd.name.toLowerCase().includes(search.toLowerCase())
//     );

//     return (
//         <div className="command-list-container">
//             <h1 className="title">Command List</h1>
//             <input
//                 type="text"
//                 placeholder="Search commands..."
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 className="form-control mb-3"
//             />
//             <ul className="list-group">
//                 {filteredCommands.map((cmd) => (
//                     <li key={cmd.name} className="list-group-item d-flex justify-content-between align-items-center">
//                         <div>
//                             <strong>{cmd.name}</strong>: {cmd.description}
//                         </div>
//                         <Link to={`/${cmd.name}`} className="btn btn-primary">View More</Link>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default CommandList;





// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './CommandList.css';

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

// const CommandList = () => {
//     const [search, setSearch] = useState('');

//     const filteredCommands = commands.filter(cmd =>
//         cmd.name.toLowerCase().includes(search.toLowerCase())
//     );

//     return (
//         <div className="d-flex  align-items-center ">
//             <div className="command-list-container bg-dark text-white p-4 shadow-lg rounded">
//                 <h1 className="title">Command List</h1>
//                 <input
//                     type="text"
//                     placeholder="Search commands..."
//                     value={search}
//                     onChange={(e) => setSearch(e.target.value)}
//                     className="form-control mb-3"
//                 />
//                 <ul className="list-group p-2">
//                     {filteredCommands.map((cmd) => (
//                         <li key={cmd.name} className="list-group-item bg-secondary text-white d-flex justify-content-between align-items-center">
//                             <div className='p-1 rounded list'>
//                                 <strong className='xyz'>{cmd.name}</strong>: {cmd.description}
//                             </div>
//                             <Link to={`/${cmd.name}`} className="btn btn-primary">View More</Link>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default CommandList;



// src/components/CommandList.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CommandList.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


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
const CommandList = () => {
    const [search, setSearch] = useState('');

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    const filteredCommands = commands.filter(cmd =>
        cmd.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100 bg-black text-white">
            <div className="container shadowdenahai">
                <div className="command-list-container bg-dark text-white p-4 shadow-lg  rounded mt-5">
                    <h1 className="title text-center mb-4" data-aos="fade-up">Command List</h1>
                    <input
                        type="text"
                        placeholder="Search commands..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="form-control mb-4"
                        data-aos="fade-up"
                    />
                    <div className="row">
                        {filteredCommands.map((cmd) => (
                            <div key={cmd.name} className="col-md-4 mb-4" data-aos="zoom-in">
                                <div className="card service-card p-3 rounded shadow-lg h-100">
                                    <div className="card-body d-flex flex-column justify-content-between">
                                        <h5 className="card-title text-white">{cmd.name}</h5>
                                        <p className="card-text para">{cmd.description}</p>
                                        <Link to={`/commands/${cmd.name}`} className="btn btn-primary mt-3 btn-grad">View More</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommandList;

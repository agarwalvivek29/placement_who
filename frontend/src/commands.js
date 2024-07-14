const commands = [
    { 
        name: 'imageinfo', 
        description: 'Provides info about the memory dump.', 
        command: (vol_path, dump_path) => `python ${vol_path} -f ${dump_path} imageinfo`,
        keyword: 'imageinfo'
    },
    { 
        name: 'pslist', 
        description: 'Lists all processes.', 
        command: (vol_path, dump_path) => `python ${vol_path} -f ${dump_path} windows.pslist`,
        keyword: 'pslist'
    },
    { 
        name: 'pstree', 
        description: 'Shows processes in tree structure.', 
        command: (vol_path, dump_path) => `python ${vol_path} -f ${dump_path} windows.pstree`,
        keyword: 'pstree'
    },
    { 
        name: 'dlllist', 
        description: 'Lists loaded DLLs.', 
        command: (vol_path, dump_path) => `python ${vol_path} -f ${dump_path} windows.dlllist`,
        keyword: 'dlllist'
    },
    { 
        name: 'handles', 
        description: 'Displays handles opened by processes.', 
        command: (vol_path, dump_path) => `python ${vol_path} -f ${dump_path} windows.handles`,
        keyword: 'handles'
    },
    { 
        name: 'cmdscan', 
        description: 'Retrieves command history.', 
        command: (vol_path, dump_path) => `python ${vol_path} -f ${dump_path} windows.cmdscan`,
        keyword: 'cmdscan'
    },
    { 
        name: 'consoles', 
        description: 'Extracts console input/output.', 
        command: (vol_path, dump_path) => `python ${vol_path} -f ${dump_path} windows.consoles`,
        keyword: 'consoles'
    },
    { 
        name: 'filescan', 
        description: 'Scans for file objects.', 
        command: (vol_path, dump_path) => `python ${vol_path} -f ${dump_path} windows.filescan`,
        keyword: 'filescan'
    },
    { 
        name: 'dumpfiles', 
        description: 'Dumps content of files.', 
        command: (vol_path, dump_path, output_dir) => `python ${vol_path} -f ${dump_path} windows.dumpfiles -D ${output_dir}`,
        keyword: 'dumpfiles'
    },
    { 
        name: 'netscan', 
        description: 'Scans for network connections.', 
        command: (vol_path, dump_path) => `python ${vol_path} -f ${dump_path} windows.netscan`,
        keyword: 'netscan'
    },
    { 
        name: 'malfind', 
        description: 'Detects suspicious memory regions.', 
        command: (vol_path, dump_path) => `python ${vol_path} -f ${dump_path} windows.malfind`,
        keyword: 'malfind'
    },
    { 
        name: 'shimcache', 
        description: 'Retrieves Shim Cache data.', 
        command: (vol_path, dump_path) => `python ${vol_path} -f ${dump_path} windows.shimcache`,
        keyword: 'shimcache'
    },
];

export default commands;
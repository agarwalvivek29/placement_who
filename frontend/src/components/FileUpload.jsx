
import React, { useState } from 'react';
import './FileUpload.css';

const FileUpload = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleFileUpload = async () => {
        const formData = new FormData();
        formData.append('file', file);

        const res = await fetch('http://localhost:5000/api/memory-dump', {
            method: 'POST',
            body: formData
        });

        const data = await res.json();
        console.log(data);
    };

    return (
        <div className="file-upload-container d-flex flex-column align-items-center justify-content-center">
            <h2 className="text-white mb-4 p-2 rounded">Upload Memory Dump</h2>
            <input
                type="file"
                onChange={handleFileChange}
                className="form-control mb-3"
            />
            <button
                onClick={handleFileUpload}
                className="btn btn-primary"
                disabled={!file}
            >
                Upload
            </button>
        </div>
    );
};

export default FileUpload;

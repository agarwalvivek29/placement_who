
import React, { useState } from 'react';
import './Analysis.css';

const Analysis = () => {
    const [fileId, setFileId] = useState('');
    const [plugin, setPlugin] = useState('');
    const [analysisId, setAnalysisId] = useState('');

    const handleAnalysis = async () => {
        const res = await fetch('http://localhost:5000/api/analyze', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ fileId, plugin })
        });

        const data = await res.json();
        setAnalysisId(data.analysisId);
    };

    return (
        <div className="analysis-container d-flex flex-column align-items-center justify-content-center">
            <h2 className="text-white mb-4 p-2 rounded">Start Analysis</h2>
            <input 
                type="text" 
                placeholder="File ID" 
                value={fileId} 
                onChange={(e) => setFileId(e.target.value)} 
                className="form-control mb-3"
            />
            <input 
                type="text" 
                placeholder="Plugin" 
                value={plugin} 
                onChange={(e) => setPlugin(e.target.value)} 
                className="form-control mb-3"
            />
            <button onClick={handleAnalysis} className="btn btn-primary mb-3">Start Analysis</button>
            {analysisId && <p className="text-white">Analysis started with ID: {analysisId}</p>}
        </div>
    );
};

export default Analysis;

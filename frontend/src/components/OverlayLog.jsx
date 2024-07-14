import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const LogfileOverlay = ({ logfileContent }) => {
  const [closed, setClosed] = useState(false);
  const data = logfileContent;

  useEffect(()=>{
    // data = logfileContent.text()
  },[logfileContent])

  return (
    <div className="overlay">
    <button className="close-button" onClick={()=>{
            setClosed(!closed)
        }}>
          Close
        </button>
    {!closed && <ProcessViewer processInfo={data} />}
    </div>
  );
};

LogfileOverlay.propTypes = {
  logfileUrl: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default LogfileOverlay;

const ProcessViewer = ({ processInfo }) => {
    // Split the processInfo string into lines
    const lines = processInfo.length > 0 ? processInfo.split('\n') : [];
    
    // Extract headers from the first line (assuming it contains headers)
    const headers = lines.length > 0 ? lines[0].split('\t') : [];
  
    return (
      <div className="process-viewer" style={{
        color : '#000'
      }}>
        {processInfo.length>0 && <>
            <h2>Process Information</h2>
        <div className="tabular-info">
          <table>
            <thead>
              <tr>
                {headers.map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {lines.slice(1).map((line, index) => (
                <tr key={index}>
                  {line.split('\t').map((cell, index) => (
                    <td key={index}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </>}
      </div>
    );
  };
  

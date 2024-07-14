// import Button from 'react-bootstrap/Button';
// import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
// import Tooltip from 'react-bootstrap/Tooltip';

// function TriggerExample() {
//   const renderTooltip = (props) => (
//     <Tooltip id="button-tooltip" {...props}>
//       Simple tooltip
//     </Tooltip>
//   );

//   return (
//     <OverlayTrigger
//       placement="right"
//       delay={{ show: 250, hide: 400 }}
//       overlay={renderTooltip}
//     >
//       <Button variant="success">Hover me to see</Button>
//     </OverlayTrigger>
//   );
// }

// export default TriggerExample;



// import React, { useState } from 'react';
// import './ChatBot.css'; // Import your custom CSS for styling

// const ChatBot = ({ handleSubmit, prompt, setPrompt, response }) => {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleChatBot = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         <div className="chatbot-container">
//             <div className="chatbot-icon" onClick={toggleChatBot}>
//                 🤖
//             </div>
//             {isOpen && (
//                 <div className="chatbot-window">
//                     <button className="close-button" onClick={toggleChatBot}>✖</button>
//                     <form onSubmit={handleSubmit}>
//                         <div className="form-group">
//                             <label htmlFor="prompt">Enter your prompt:</label>
//                             <input
//                                 type="text"
//                                 className="form-control"
//                                 id="prompt"
//                                 value={prompt}
//                                 onChange={(e) => setPrompt(e.target.value)}
//                             />
//                         </div>
//                         <button type="submit" className="btn btn-primary mt-3">Submit</button>
//                     </form>
//                     {response && (
//                         <div className="mt-4">
//                             <h5>Response:</h5>
//                             <pre className="bg-secondary p-3 rounded">{response}</pre>
//                         </div>
//                     )}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ChatBot;




// import React, { useState } from 'react';
// import './ChatBot.css'; // Import your custom CSS for additional styling if needed

// const ChatBot = ({ handleSubmit, prompt, setPrompt, response }) => {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleChatBot = () => {
//         setIsOpen(!isOpen);
//     };
//     const handleSubmit = async (e) => {
//       e.preventDefault();
//       try {
//           const res = await fetch('http://localhost:8000/api/generate', {
//               method: 'POST',
//               headers: {
//                   'Content-Type': 'application/json',
//               },
//               body: JSON.stringify({ prompt }),
//           });
//           const data = await res.json();
//           setResponse(data.response);
//       } catch (error) {
//           console.error('Error:', error);
//       }
//   };

//     return (
//         <div className="chatbot-container">
//             <div className="chatbot-icon" onClick={toggleChatBot}>
//                 🤖
//             </div>
//             {isOpen && (
//                 <div className="chatbot-window card">
//                     <button className="btn-close close-button" onClick={toggleChatBot}></button>
//                     <form onSubmit={handleSubmit}>
//                         <div className="mb-3">
//                             <label htmlFor="prompt" className="form-label">Enter your prompt:</label>
//                             <input
//                                 type="text"
//                                 className="form-control"
//                                 id="prompt"
//                                 value={prompt}
//                                 onChange={(e) => setPrompt(e.target.value)}
//                             />
//                         </div>
//                         <button type="submit" className="btn btn-primary">Submit</button>
//                     </form>
//                     {response && (
//                         <div className="mt-4">
//                             <h5>Response:</h5>
//                             <pre className="bg-light p-3 rounded border">{response}</pre>
//                         </div>
//                     )}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ChatBot;





import React, { useState } from 'react';
import './ChatBot.css'; // Import your custom CSS for additional styling if needed

const ChatBot = ({ handleSubmit, prompt, setPrompt }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [response, setResponse] = useState(null);

    const toggleChatBot = () => {
        setIsOpen(!isOpen);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:5000/api/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ prompt }),
            });
            let data = await res.json();
            console.log(data);
            const jsonResponse = JSON.parse(data.response.replace(/```json\n|\n```/g, ''));
            console.log(jsonResponse.response); // Outputs: "The user prompt is not related to Memory Analysis or the Volatility framework."

            setResponse(jsonResponse.response);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="chatbot-container">
            <div className="chatbot-icon" onClick={toggleChatBot}>
                🤖
            </div>
            {isOpen && (
                <div className="chatbot-window card">
                    <button className="btn-close close-button" onClick={toggleChatBot}></button>
                    <form onSubmit={onSubmit}>
                        <div className="mb-3">
                            <label htmlFor="prompt" className="form-label">Enter your prompt:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="prompt"
                                value={prompt}
                                onChange={(e) => setPrompt(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                    {response && (
                        <div className="mt-4">
                            <h5>Response:</h5>
                            <div className="bg-secondary p-3 rounded text-white">{response}</div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default ChatBot;

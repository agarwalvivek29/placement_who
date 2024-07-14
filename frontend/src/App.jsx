// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Home from './screens/Home'


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//    <>
//     <Home/>
//    </>
//   )
// }

// export default App


// //working
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import CommandList from './components/CommandList';
// import CommandDetail from './components/CommandDetail';
// import FileUpload from './components/FileUpload';
// import Analysis from './components/Analysis';
// import LandingPage from './components/LandingPage';
// import Navbar from "./components/Navbar";
// import ChatBot from "./screens/chatBot"

// const App = () => {
//     return (
//         <Router>
//             <div>
//               <Navbar/>
//                 <Routes>
//                     <Route path="/" element={<LandingPage />} />
//                     <Route path="/commands" element={<CommandList />} />
//                     <Route path="/commands/:command" element={<CommandDetail />} />
//                     <Route path="/upload" element={<FileUpload />} />
//                     <Route path="/analysis" element={<Analysis />} />
//                 </Routes>
//             </div>
//         </Router>
//     );
// };

// export default App;




import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CommandList from './components/CommandList';
import CommandDetail from './components/CommandDetail';
import FileUpload from './components/FileUpload';
import Analysis from './components/Analysis';
import LandingPage from './components/LandingPage';
import Navbar from "./components/Navbar";
import ChatBot from "./screens/chatBot";
import { Toaster, toast } from 'sonner'

import { useAuth } from '@clerk/clerk-react';
import LogfileOverlay from './components/OverlayLog';

const App = () => {
    const { isSignedIn } = useAuth();
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

    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/commands" element={<CommandList />} />
                    <Route path="/commands/:command" element={<CommandDetail />} />
                    <Route path="/upload" element={<FileUpload />} />
                    <Route path="/analysis" element={<Analysis />} />
                    <Route path='/result' element={<LogfileOverlay />} />
                </Routes>
                {isSignedIn && (
                    <ChatBot
                        handleSubmit={handleSubmit}
                        prompt={prompt}
                        setPrompt={setPrompt}
                        response={response}
                    />
                )}
            </div>
            <Toaster />
        </Router>
    );
};

export default App;

// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import CommandList from './components/CommandList';
// import CommandDetail from './components/CommandDetail';
// import FileUpload from './components/FileUpload';
// import Analysis from './components/Analysis';

// const App = () => {
//     return (
//         <Router>
//             <div className='bg-black text-white'>
//                 {/* <h1>Volatility Framework UI</h1> */}
//                 {/* <FileUpload />
//                 <Analysis /> */}
//                 <Routes>
//                     <Route path="/" element={<CommandList />} />
//                     <Route path="/:command" element={<CommandDetail />} />
//                 </Routes>
//             </div>
//         </Router>
//     );
// };

// export default App;





// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import CommandList from './components/CommandList';
// import CommandDetail from './components/CommandDetail';
// import FileUpload from './components/FileUpload';
// import Analysis from './components/Analysis';

// const App = () => {
//     return (
//         <Router>
//             <div className='bg-black text-white'>
//                 <h1 className="text-center mt-4">Volatility Framework UI</h1>
//                 <Routes>
//                     <Route path="/" element={<CommandList />} />
//                     <Route path="/:command" element={<CommandDetail />} />
//                     <Route path="/upload" element={<FileUpload />} />
//                     <Route path="/analysis" element={<Analysis />} />
//                 </Routes>
//             </div>
//         </Router>
//     );
// };

// export default App;




// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CommandList from './components/CommandList';
import CommandDetail from './components/CommandDetail';
import FileUpload from './components/FileUpload';
import Analysis from './components/Analysis';
import LandingPage from './components/LandingPage';

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/commands" element={<CommandList />} />
                    <Route path="/commands/:command" element={<CommandDetail />} />
                    <Route path="/upload" element={<FileUpload />} />
                    <Route path="/analysis" element={<Analysis />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;

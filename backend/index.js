// const express = require('express');
// const dbConnect = require('./dbConnect');
// const cors = require('cors');
// const fileUpload = require('express-fileupload');
// const path = require('path');
// const { GoogleGenerativeAI } = require("@google/generative-ai");
// const aiRouter = require('./routes/ai');
// const volatilityRouter=require('./routes/volatility');

// require('dotenv').config();

// const app = express();
// dbConnect();

// app.use(cors({ origin: '*' }));
// app.use(express.json());
// app.use(fileUpload());
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// app.use('/ai',aiRouter);
// app.use('/volatility',volatilityRouter); 
// const genAI = new GoogleGenerativeAI('AIzaSyAT_Z210Ey_bOdT4Y1CfPAiLoSrRvvmR0U');

// // Routes
// const uploadRoute = require('./routes/upload.js');
// app.use('/api', uploadRoute);

// app.post('/api/generate', async (req, res) => {
//     const { prompt } = req.body;
//     const formattedPrompt = `
//         User prompt : ${prompt}. Answer the above prompt only if it is related to Memory analysis or The Volatility framework. The Answer should be really precise and the format is as follows.
//         {
//             success : false, //if not related to memory analysis or volatility framework
//             response
//         }
//     `;
//     try {
//         const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
//         const result = await model.generateContent(formattedPrompt);
//         const response = await result.response;
//         const newtext = await response.text();

//         // Log the raw response to inspect what's being returned
//         console.log("Raw response from Generative AI:", newtext);

//         res.json({ response: newtext });
//     } catch (error) {
//         console.error('Error generating response:', error);
//         res.status(500).json({ error: 'Error generating response' });
//     }
// });

// app.get('/', (req, res) => {
//     res.send('Server OK');
// });

// app.listen(process.env.PORT, () => {
//     console.log(`Server is running on port ${process.env.PORT}`);
// });






const express = require('express');
const dbConnect = require('./dbConnect');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const path = require('path');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const aiRouter = require('./routes/ai');
const volatilityRouter = require('./routes/volatility');
const uploadRoute = require('./routes/upload.js');
const mlRoute = require('./routes/mlRoute');


require('dotenv').config();

const app = express();
dbConnect();

app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(fileUpload());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/ai', aiRouter);
app.use('/volatility', volatilityRouter);
app.use('/api', mlRoute);

const genAI = new GoogleGenerativeAI('AIzaSyAT_Z210Ey_bOdT4Y1CfPAiLoSrRvvmR0U');

// Generate content route
app.post('/api/generate', async (req, res) => {
    const { prompt } = req.body;
    const formattedPrompt = `
        User prompt: ${prompt}. Answer the above prompt only if it is related to Memory analysis or The Volatility framework. The Answer should be really precise and the format is as follows.
        {
            success: false, // if not related to memory analysis or volatility framework
            response
        }
    `;
    
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent(formattedPrompt);
        const response = await result.response;
        const newText = await response.text();

        console.log("Raw response from Generative AI:", newText);
        res.json({ response: newText });
    } catch (error) {
        console.error('Error generating response:', error);
        res.status(500).json({ error: 'Error generating response' });
    }
});

// Health check route
app.get('/', (req, res) => {
    res.send('Server OK');
});

// Start server
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const fileUpload = require('express-fileupload');
// const path = require('path');

// const app = express();

// // Middleware
// app.use(cors({ origin: '*' }));
// app.use(express.json());
// app.use(fileUpload());
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// // MongoDB Connection
// const MONGODB_URI = 'mongodb+srv://a34mritunjaysingh:ZTstfyNf9O6HZkyz@cluster0.ly5ihqd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// mongoose.connect(MONGODB_URI, {})
// .then(() => console.log('MongoDB connected'))
// .catch(err => console.log(err));

// // Routes
// const uploadRoute = require('./routes/upload.js');
// app.use('/api', uploadRoute);

// // Set the port
// const PORT = 8000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const path = require('path');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const app = express();

// Middleware
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(fileUpload());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// MongoDB Connection
const MONGODB_URI = 'mongodb+srv://a34mritunjaysingh:ZTstfyNf9O6HZkyz@cluster0.ly5ihqd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(MONGODB_URI, {})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Google Generative AI setup
const genAI = new GoogleGenerativeAI('AIzaSyAT_Z210Ey_bOdT4Y1CfPAiLoSrRvvmR0U');

// Routes
const uploadRoute = require('./routes/upload.js');
app.use('/api', uploadRoute);

app.post('/api/generate', async (req, res) => {
    const { prompt } = req.body;
    const formattedPrompt = `
        User prompt : ${prompt}. Answer the above prompt only if it is related to Memory analysis or The Volatility framework. The Answer should be really precise and the format is as follows.
        {
            success : false, //if not related to memory analysis or volatility framework
            response
        }
    `;
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent(formattedPrompt);
        const response = await result.response;
        const newtext = await response.text();

        // Log the raw response to inspect what's being returned
        console.log("Raw response from Generative AI:", newtext);

        res.json({ response: newtext });
    } catch (error) {
        console.error('Error generating response:', error);
        res.status(500).json({ error: 'Error generating response' });
    }
});

// Set the port
const PORT = 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

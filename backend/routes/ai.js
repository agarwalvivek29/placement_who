const express = require('express');
const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();

const router = express.Router();
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

async function getAIResponse(text){
    try{
        const model = genAI.getGenerativeModel({ model : "" });
        const request = await model.generateContent(text);
        const response = await request.response;
        const res = response.text();
        return res;
    }
    catch(e){
        console.log(e);
        return null;
    }
}

router.post('/',(req,res)=>{

});

module.exports = router;
const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/scan-malicious', async (req, res) => {
    try {
        const response = await axios.post('http://localhost:8001/predict', {
            data: req.body.data,  // Send the required data
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error calling ML model:', error);
        res.status(500).json({ error: 'Error calling ML model' });
    }
});

module.exports = router;

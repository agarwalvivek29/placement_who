const express = require('express');
const router = express.Router();
const Request = require('../model/Request');

// Endpoint to create a new request
router.post('/execute', async (req, res) => {
    const { memoryDumpId, command } = req.body;

    const newRequest = new Request({ memoryDumpId, command });
    await newRequest.save();

    res.json({ requestId: newRequest._id });
});

// Endpoint to check the result of a request
router.get('/result/:requestId', async (req, res) => {
    const { requestId } = req.params;
    const request = await Request.findById(requestId);

    if (request.outputId) {
        res.json({ outputId: request.outputId });
    } else {
        res.status(202).json({ message: 'Processing' });
    }
});

module.exports = router;

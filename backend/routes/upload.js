const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

router.post('/memory-dump', (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    let memoryDump = req.files.file;
    let uploadPath = path.join(__dirname, '../uploads/', memoryDump.name);

    memoryDump.mv(uploadPath, function(err) {
        if (err)
            return res.status(500).send(err);

        // You would trigger the Volatility analysis here

        res.send({ status: 'success', fileId: memoryDump.name });
    });
});

module.exports = router;

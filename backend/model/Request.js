const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
    memoryDumpId: { type: String, required: true },
    command: { type: String, required: true },
    outputId: { type: String, default: null }
});

const Request = mongoose.model('Request', requestSchema);

module.exports = Request;

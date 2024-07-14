const mongoose = require('mongoose');

const memorySchema = new mongoose.Schema({
    memoryLocation: { type: String, required: true }
});

const Memory = mongoose.model('Memory', memorySchema);

module.exports = Memory;

const mongoose = require('mongoose');

// Create schema for the database
const dreamSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required']
    },
    description: {
        type: String,
        required: [true, 'Description is required']
    },
    date: {
        type: Date,
        required: [true, 'Created date is required']
    },
    type: {
        type: String,
        enum: ['happy', 'sad', 'exciting', 'scary'],
        required: [true, 'Type of dream is required']
    }
});

module.exports = dreamSchema;

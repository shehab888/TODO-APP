const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({ 
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',  // الربط مع الـ User model
        // required: true
    }
});

module.exports = mongoose.model('Todo', todoSchema);

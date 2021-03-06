const { Schema, model } = require('mongoose');

// item model including username and user email for related front-end calls
const itemSchema = new Schema({
    genre: {
        type: String,
        required: true,
        trim: true,
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    location: {
        type: String,
        required: true,
        trim: true,
    },
    condition: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        trim: true,
    },
    image_id: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
    },
    user: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
});

const Item = model('Item', itemSchema);

module.exports = Item;
const { Schema, model } = require('mongoose');


const itemSchema = new Schema({
    genre: {
        type: String,
        required: true,
        time: true,
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
    image: {
        type: String,
        required: true,
    },
    image_id: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
});

const Item = model('Item', itemSchema);

module.exports = Item;
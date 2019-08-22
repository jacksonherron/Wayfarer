const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const post = new Schema({
    user: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        }
    ],
    city: [
        {
            type: Schema.Types.ObjectId,
            ref: 'City',
        }
    ],
    title: {
        type: String,
        required: true,
        maxlength: [200, 'Max length exceeded'],
    },
    content: {
        type: String,
        required: true,
        maxlength: [1000, 'Max length exceeded'],
    },
    date_posted: {
        type: Date,
        default: Date.now,
    },

})
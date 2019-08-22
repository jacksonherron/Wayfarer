const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    profile_photo: {
        type: String,
        default: 'http://s3.amazonaws.com/nvest/Blank_Club_Website_Avatar_Gray.jpg'
    },
    join_date: {
        type: Date,
        default: Date.now,
    },
    location: {
        type: String,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: Boolean,
    default: false,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
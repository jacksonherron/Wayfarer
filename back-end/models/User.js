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
        default: 'https://cdn.pixabay.com/photo/2015/07/06/15/12/w-833386_960_720.png',
        
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
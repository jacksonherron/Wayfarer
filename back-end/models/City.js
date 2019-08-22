const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const citySchema = new Schema ({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    location: {
        type: [Number],
        index: '2dSphere',
    },
    image: {
        type: String,
        default: 'https://image.freepik.com/free-vector/silhouette-skyline-illustration_53876-78786.jpg'
    },
});

const City = mongoose.model('City', citySchema);

module.exports = City;
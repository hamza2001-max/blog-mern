const { timeStamp } = require('console');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogModel = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    blogBody: {
        type: String,
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model('blog', blogModel);
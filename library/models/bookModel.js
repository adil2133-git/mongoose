const mongoose = require("mongoose")

const bookModel = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    genre: String,
    publishedYear: Number,
    available: {
        type: Boolean,
        default: true
    }
}, { timeStamps: true })
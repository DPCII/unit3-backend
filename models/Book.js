
// Require connection file and save to mongoose.
const mongoose = require('../db/connection');

const BookSchema = new mongoose.Schema({
    id: Number,
    url: String,
    name: String,
    country: {
        name: String,
        code: String,
        timezone: String,
    },
    birthday: Date,
    deathday: Date,
    gender: String,
    image: {
        medium: String,
        original: String,
    },
    _links: {
        self: {
            href: String,
        },
    },
});

const Book = mongoose.model("Books", BookSchema);

module.exports = Book;
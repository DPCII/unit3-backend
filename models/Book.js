
// Require connection file and save to mongoose.
const mongoose = require('../db/connection');


const BookSchema = new mongoose.Schema({
    volumeInfo: {
        title: String,
        authors: Array,
        imageLinks: {
        smallThumbnail: String,
        thumbnail: String,
    }},
   
    
});

const Book = mongoose.model("Books", BookSchema);

module.exports = Book;
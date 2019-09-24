// Import Models!
const Book = require("../models/Book");


// Import raw data!
const bookData = require("../db/books.json");


//Clear records, test seeding
Book.deleteMany({}).then(() => {
    console.log("Deleted all Book documents");

    Book.create(bookData).then(res => console.log(res));
})

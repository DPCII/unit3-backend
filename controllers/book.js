const Book = require("../models/Book");

module.exports = {
    index: (req, res) => {
        //Return all people
        Book.find({}).then(output => res.json(output))
    },
    name: (req, res) => {
        //Return Book by name
        Book.find({ name: req.params.name }).then(output => res.json(output))
    },
    id: (req, res) => {
        //Return Book by _id
        Book.find({ "_id": req.params.id }).then(output => res.json(output))
    },
    newBook: (req, res) => {
        //Create new Book
        const newBook = req.body;
        Book.create(newBook).then(output => res.json(output))
    },
    update: (req, res) => {
        //Modify Book by _id search
        const requestBody = req.body;
        Book.findOneAndUpdate({ "_id": req.params.id }, { requestBody }, { new: true })
        .then(output => res.json(output))
    },
    delete: (req, res) => {
        //Delete Book entry by _id search
        Book.findOneAndDelete({ "_id": req.params.id }).then(output => res.json(output))
    },
}
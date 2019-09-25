const express = require('express');
const bookRouter = express.Router();

const bookController = require("../controllers/book")

bookRouter.get("/", bookController.index);
bookRouter.get("/name/:name", bookController.name);
bookRouter.get("/id/:id", bookController.id);
bookRouter.post("/", bookController.newBook);
bookRouter.put("/id/:id", bookController.update);
bookRouter.delete("/id/:id", bookController.delete);

module.exports = bookRouter;
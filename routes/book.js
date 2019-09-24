const express = require('express');
const bookRouter = express.Router();

const bookController = require("../controllers/book")

bookRouter.get("/", bookController.index);
bookRouter.get("/:name", bookController.name);
bookRouter.get("/:id", bookController.id);
bookRouter.post("/", bookController.newBook);
bookRouter.put("/:id", bookController.update);
bookRouter.delete("/:id", bookController.delete);

module.exports = bookRouter;
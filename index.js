const express = require('express')
const app = express();
const parser = require('body-parser');
const cors = require('cors');

// Requiring controllers
const bookRoutes = require('./routes/book');

// The coded needed to make body-parser work.
app.use(parser.urlencoded({extended: true}))
app.use(parser.json());
app.use(cors());

// Instantiating controllers
app.use('/api/books/', bookRoutes)


app.listen(4000, () => console.log('Server running on port 4000!'))
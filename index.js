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

app.get('/', function (req, res) {
    res.redirect('/api/books/')
  })


app.set("port", process.env.PORT || 8081);

app.listen(app.get("port"), () => {
  console.log(` PORT: ${app.get("port")} `);
});
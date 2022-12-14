const express = require('express');
const path = require('path');
const app = express();

// Static files = not handled by the server

// Express. static is middleware, makes it so that any request has access to the given file
app.use(express.static('public'));
//app.use(express.static($(__dirname}/public ')) //gets directory when you don't know what it's called

//Gets the home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
})

app.listen(4000, () => console.log(`Running on 4000!`));
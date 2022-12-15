require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const {ROLLBACK_TOKEN} = process.env;

// include and initialize the rollbar library with your access token
var Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken: ROLLBACK_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true
});

// record a generic message and send it to Rollbar
rollbar.log("Hello world!");

// Static files = not handled by the server

// Express. static is middleware, makes it so that any request has access to the given file
app.use(express.static('public'));
//app.use(express.static($(__dirname}/public ')) //gets directory when you don't know what it's called

//Gets the home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
})

app.listen(4000, () => console.log(`Running on 4000!`));
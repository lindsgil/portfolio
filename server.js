'use strict';
//Comments taken from Lecture 07, Code Fellows 301
// Load Express
const express = require('express');

// Instantiate Express so that we can use its functionality
const app = express();
// Designate a port to serve our app on
const PORT = process.env.PORT || 3000;

// Define which directory we will serve files from
app.use(express.static('.'));

// Setting up a route to index.html
app.get('/index', function(request, response) {
  response.sendFile('/index.html', {root: '.'})
})

// Sending a 404 for everything except for index.html
app.use(function(request, response, next) {
  console.log('BEEP BEEP ERROR 404');
  // response.status(404).sendFile('404.html', { root: '.'});
})

// Now let's tell the app to listen so that it can do its thing
app.listen(PORT, function() {
  console.log('Your app is being served on localhost:3000');
})

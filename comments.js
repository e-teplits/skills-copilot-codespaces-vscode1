// Create web server
// Start web server
// Create a route to handle GET requests to /comments
// Read the comments.json file
// Send the comments back as JSON
// Listen for requests on port 3000

// Import the express library
const express = require('express');
// Import the file system library
const fs = require('fs');

// Create a new express application called app
const app = express();
// Create a new route for GET requests to /comments
app.get('/comments', (req, res) => {
  // Read the contents of the comments.json file
  fs.readFile('comments.json', 'utf8', (err, data) => {
    // If there was an error reading the file
    if (err) {
      // Send an error response
      res.status(500).send('An error occurred reading the file');
      return;
    }
    // Parse the contents of the file as JSON
    const comments = JSON.parse(data);
    // Send the comments back as JSON
    res.json(comments);
  });
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// Run the server using the command node comments.js
// Open a web browser and navigate to http://localhost:3000/comments to see the comments.json file displayed as JSON

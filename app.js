//Import modules
const express = require('express');
const path = require('path');

// initialize the app
const app = express();

// Set up the port
const PORT = process.env.PORT || 3000;

//  Serve static files
// This tells Express to serve files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Set up views directory for HTML files
app.set('views', path.join(__dirname, 'views'));

// Serve HTML pages on different routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/home.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/about.html'));
});

app.get('/works', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/works.html'));
});

app.get('/gallery', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/PhotoGallery.html'));
  });
  
  //  Start the server
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
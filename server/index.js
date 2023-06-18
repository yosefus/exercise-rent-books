// Import the required modules
const dotenv = require('dotenv');
// Load the environment variables from the .env file
dotenv.config();

// Create the express app
const express = require('express');
const cors = require('cors');
const app = express();

// routes
const router = require('./routes/book');

// Get the port number from the environment variables or use 8000 as default
const PORT = process.env.PORT || 8000;

// Use cors middleware to allow cross origin requests
app.use(cors());

// Use express built-in middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define a simple test route
app.get('/test', (req, res) => {
   res.send('Hello from express server - test success');
});

app.use('/api/books/', router);

// Start the server
app.listen(PORT, () => console.log(`Running on ${PORT} ⚡`));

// Import the express module
const express = require('express');

// Create a router object
const router = express.Router();

// Define some routes for the router
router.get('/', (req, res) => {
   res.send('all the books');
});

// TODO - get all route
// TODO - get one route
// TODO - update one route
// TODO - delete one route
// TODO - create one route


// Export the router object
module.exports = router;

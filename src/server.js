const express = require('express');

// Init
const server = express();


// Setting
server.set('port', process.env.PORT || 3000);
// Middlewares 


// Global variables

// Routes

// Static files

// Server listener
server.listen(server.get('port'), () => {
  console.log('Server running on port', server.get('port'));
});


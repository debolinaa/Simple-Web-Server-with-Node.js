// Import required modules
const http = require('http');
const fs = require('fs');
const path = require('path');
const handleRoutes = require('./routes');

// Define port
const PORT = 3000;

// Create server
const server = http.createServer((req, res) => {
    handleRoutes(req, res);
});

// Start server
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
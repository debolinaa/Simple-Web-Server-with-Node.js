This project creates a basic web server using Node.js’ built-in http module.

• The http.createServer() method creates the server.
• The server listens on port 3000.
• Routing logic is handled in a separate file (routes.js) for modularity.
• The fs.readFile() function is used asynchronously to read HTML and CSS files.
• Proper HTTP status codes are used:

200 → Successful request

404 → Page not found

500 → Internal server error
• A custom 404 page is served for invalid routes.
• CSS styling improves UI appearance.

This implementation demonstrates:

Basic routing

Modular coding

Asynchronous file handling

Proper HTTP response management

Error handling

const fs = require('fs');
const path = require('path');

function serveFile(filePath, contentType, res, statusCode = 200) {
    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/html' });
            res.end('<h1>500 - Internal Server Error</h1>');
        } else {
            res.writeHead(statusCode, { 'Content-Type': contentType });
            res.end(content);
        }
    });
}

function handleRoutes(req, res) {
    const url = req.url;

    if (url === '/home' || url === '/') {
        serveFile(path.join(__dirname, 'views', 'home.html'), 'text/html', res);
    } 
    else if (url === '/about') {
        serveFile(path.join(__dirname, 'views', 'about.html'), 'text/html', res);
    } 
    else if (url === '/contact') {
        serveFile(path.join(__dirname, 'views', 'contact.html'), 'text/html', res);
    }
    else if (url === '/style.css') {
        serveFile(path.join(__dirname, 'public', 'style.css'), 'text/css', res);
    }
    else {
        serveFile(path.join(__dirname, 'views', '404.html'), 'text/html', res, 404);
    }
}

module.exports = handleRoutes;
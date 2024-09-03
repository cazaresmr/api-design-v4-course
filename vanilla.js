const http = require('http');

const server = http.createServer(async (req, res) => {
    // console.log(req);
    // console.log(res);
    if (req.method === 'GET' && req.url === '/') {
        res.statusCode = 200;
        res.end("Creating an HTTP Server via Vanills JS");
    } else {
        res.statusCode = 404;
        res.end('Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

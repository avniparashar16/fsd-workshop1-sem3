const http = require('http');
const port = 3000;
const server = http.createServer((req, res) => {
    console.log('Request received : ${req.method} ${req.url}');
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('X-Powered-By', 'Express');//X-Powered-By is a custom header for node js.
    res.end('Hello World!'); //send response to the client
});
server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
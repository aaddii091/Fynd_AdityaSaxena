const http = require('http');

const host = `localhost`;
const port = 3000;

const reqListener = (req, res) => {
    res.writeHead(200);
    res.end(`Hello World, from Node.js`);
}

const server = http.createServer(reqListener);
server.listen(port, host, () => {
    console.log(`Server is running on port: ${port}`);
});
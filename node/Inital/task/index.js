const http = require('http');
const fs = require('fs');

const host = `localhost`;
const port = 3000;
const html = {'Content-Type': 'text/html'};

const file = (filename) => {
    return fs.readFileSync(filename);
}

const reqListener = (req, res) => {
    if (req.url=='/'){
        res.writeHead(200, html);
        // res.write(fs.readFileSync('./style.css', {encoding: "utf8"}));
        res.end(file('home.html'));
    }
1
    if (req.url=='/contact'){
        res.writeHead(200, html);
        // res.write(fs.readFileSync('./style.css', {encoding: "utf8"}));
        res.end(file('contact.html'));
    }

    if (req.url=='/about'){
        res.writeHead(200, html);
        res.end(file('about.html'));
    }

};

const server = http.createServer(reqListener);
server.listen(port, host, () => {
    console.log(`Server is running on port: ${port}`);
});
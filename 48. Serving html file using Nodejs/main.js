const http = require("http");
const fs = require("fs");
const fileContent = fs.readFileSync("48. Serving html file using Nodejs/webpage.html");

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.end(fileContent);
})


server.listen(80, '127.0.0.1', () => {
    console.log("Listening on port 80");
})
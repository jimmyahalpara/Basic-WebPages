const http = require("http");
const fs = require('fs');


const hostname = '127.0.0.1';
const port = 3000;

const home = fs.readFileSync("49. Creating custom bakend using nodejs/home.html");
const aboutUs = fs.readFileSync("49. Creating custom bakend using nodejs/aboutus.html");
const contactUs = fs.readFileSync("49. Creating custom bakend using nodejs/contactus.html");
const services = fs.readFileSync("49. Creating custom bakend using nodejs/services.html");


const server = http.createServer((req, res) => {
    console.log(req.url);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    // res.end('Hello World');


    let url = req.url;
    if (url == '/') {
        res.end(home);
    } else if (url == '/services') {
        res.end(services);
    } else if (url == '/contactus') {
        res.end(contactUs);
    } else if (url == '/aboutus') {
        res.end(aboutUs);
    } else {
        res.end("page not found");
    }

})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})
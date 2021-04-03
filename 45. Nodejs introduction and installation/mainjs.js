// console.log("Hello World");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Media Queries</title>
      <style>
          .box {
              background-color: red;
              color: white;
              text-align: center;
              font-size: 72px;
              display: none;
          }
          
          @media only screen and (max-width: 300px) {
              #box-1 {
                  display: block;
              }
          }
          
          @media only screen and (min-width: 300px) and (max-width: 500px) {
              #box-2 {
                  display: block;
                  background-color: cyan;
              }
          }
          
          @media only screen and (min-width: 500px) and (max-width: 800px) {
              #box-3 {
                  display: block;
                  background-color: green;
              }
          }
          
          @media only screen and (min-width: 800px) {
              #box-4 {
                  display: block;
                  background-color: blue;
              }
          }
      </style>
  </head>
  
  <body>
      <div class="box" id="box-1">first Lorem ipsum dolor sit amet.</div>
      <div class="box" id="box-2">second Lorem ipsum dolor sit amet.</div>
      <div class="box" id="box-3">third Lorem, ipsum dolor.</div>
      <div class="box" id="box-4">fourth Lorem ipsum dolor, sit amet consectetur adipisicing elit.</div>
  </body>
  
  </html>`);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
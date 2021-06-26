const http = require('http');
const fs = require('fs');
const router = require('./router');

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  router(req,res);
});

server.listen(port, hostname, () => {
  console.log(`Server maybe running at http://${hostname}:${port}/.. im not sure!`);
});  

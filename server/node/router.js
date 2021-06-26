const http = require('http');
const fs = require('fs');
//const db = require('./db');
const { getMessages } = require('./db');
const { rest } = require('lodash');

//const script = require('././client/script');
//client/script.js
// function displayDb(db) {
//   for (let i = 0; i < db.msgs.length; i++) {
//     showMessage(db.msgs[i].content, db.msgs[i].authorId, db.msgs[i].timestamp);
//   }
// }



function bodyParser (req, res) {
  if (req.method === 'POST') {
    let body = [];
    req
      .on('data', chunk => body.push(chunk))
      .on('end', () => {
        const message = JSON.parse(Buffer.concat(body)); //js
        // Buffer.concat(body).toString();
        req.body = message;
        // console.log(message);
        
        let dbdata = getMessages();
        dbdata.push(req.body);
        console.log('DBDATA', dbdata);

        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(dbdata));
        
        // req.banana = 'monkey';
        // res.end();
      });
    // return req.body;
  }
}

function saveMessage (req, res) {
  bodyParser(req, res);
  // console.log(req.body);

  
  
}

function helper (req, res) {
  fs.readFile('././client' + req.url, 'utf8', (err, data) => { 
    if (err) {
      res.writeHead(404);
      res.end('bad error');
      return;
    }
    if (req.url.endsWith('css')) {
      console.log('3');
      res.writeHead(200,{'Content-Type': 'text/css'});
    } else 
    if (req.url.endsWith('js')) {
      console.log('2');
      res.writeHead(200, {'Content-Type': 'text/javascript'});
    } else {
      console.log('2');
      res.writeHead(200, { 'Content-Type': 'text/html' });
    }
    //res.writeHead(200);
    // console.log(res);
    res.end(data);
  });
}

function router (req, res) {
  if (req.method === 'GET') {
    if (req.url === '/') {
      req.url = '/index.html';
      helper(req, res);
    }

    if (req.url.includes('.')) {
      helper(req, res);
    }
    // if (req.url === '/script.js') {
    //   helper(req, res);
    // }
    // if (req.url === '/style.css') {
    //   helper(req, res);
    // }
    
    else if (req.url === '/messages') {
      console.log('getting msgs from db');

      let dbdata = getMessages();
      console.log('data', dbdata);
      res.setHeader('Content-Type', 'application/json'); 
      res.end(JSON.stringify(dbdata));
    }
  } else if (req.method === 'POST') {
    if (req.url === '/messages') {
      saveMessage(req, res);
    }
  }
}

module.exports = router;
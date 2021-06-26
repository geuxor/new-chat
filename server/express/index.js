const express = require('express');
const router = require('./router');
const app = express();
const port = 3000;

app.use(express.static(__dirname + '../../../client'));
app.use(express.json());  //deal with the req - must be before the router
// app.use(express.bodyParser)
app.use(router);




app.listen(port, () => {
  console.log(`server running at ${port} :D`);
});


// app.get('/', (response, requ est) => {
//   response.sendFile('../../client/index.html');
// })
  
// app.use(function (request, response) {
//   response.sendFile('../../client/');
// });
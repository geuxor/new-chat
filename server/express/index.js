const express = require('express');
const router = require('./router');
const app = express();
const port = 3000;

app.use(express.static(__dirname + '../../../client'));
app.use(express.json());  //deal with the req - must be before the router - does bodyparser automatically
app.use(router);
app.listen(port, () => {
  console.log(`server running at http://localhost:${port} 🚀`);
});

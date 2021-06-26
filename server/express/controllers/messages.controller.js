const messageModel = require('../models/message.models');

function getMessages (req, res) {
  // console.log('got to controller');
  // console.log(request.params, 'request');
  const dbdata = messageModel.getMessageData(); // this connects to the database, gives us the messages (dbdata);
  console.log(dbdata);
  res.status(200);
  // res.json(dbdata);
  res.send(dbdata); 
}

function postMessages (req, res) {
  //get the msg after put all chunks together
  console.log(req.body);
  // message = req.body;
  
  //send msg to model to save to db
  const messages = messageModel.saveMessage();
  
  //return msg to client to say its all ok
  res.status(200);
  res.json(messages);
}


module.exports = { getMessages, postMessages };
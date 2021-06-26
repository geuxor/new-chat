const messageModel = require('../models/message.model');

function getMessages (req, res) {
  const dbdata = messageModel.getMessageData(); // this connects to the database, gives us the messages (dbdata);
  console.log(dbdata);
  res.status(200);
  res.json(dbdata);
  // res.send(dbdata); 
}

function saveMessages (req, res) {
  const messages = req.body;
  const savedData = messageModel.saveMessageData(messages); //send msg to model to save to db
  //return msg to client to say its all ok
  res.status(200);
  console.log('savedData', savedData);
  res.json(savedData);

}


module.exports = { getMessages, saveMessages };
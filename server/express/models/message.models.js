const db = require('../db');

function getMessageData () {
  // const data = db.msgs;
  // console.log(data);
  return db.msgs;
}

function saveMessage (message) {
  db.msgs.push(message);
  return message;
}

module.exports = { getMessageData, saveMessage };
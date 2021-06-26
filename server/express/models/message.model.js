const db = require('../db');

function getMessageData () {
  return db.msgs;
}

function saveMessageData (message) {
  db.msgs.push(message);
  console.log('this db:', db.msgs);
  return message;
}

module.exports = { getMessageData, saveMessageData };
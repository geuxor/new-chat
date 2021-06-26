'use strict';
//const db = require('./server/node/db');

class Message {
  constructor(content, authorId, timestamp) {
    this.content = content;
    this.authorId = authorId;
    this.timestamp = timestamp;
  }
}

function genRandomMs() {
  // Returns a random number between 0 and 10 seconds, in milliseconds
  return Math.floor(Math.random() * 1e4);
}

function prettifyDate(timestamp) {
  // Returns the date in hh:mm am/pm format
  const options = { month: 'long', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' };
  return new Date(timestamp).toLocaleTimeString('en-UK', options);
}

function showMessage(msg) {
  const { content, authorId, timestamp } = msg;
  console.log(content, authorId, timestamp);
  const $HtmlMsg = $(`
    <div class="message ${authorId ? 'right' : 'left'}">
      <div class="message-text">${content}</div>
      <div class="message-time">${prettifyDate(timestamp)}</div>
    </div>
  `);
  $('.messages-container').append($HtmlMsg);
}

function simulateIncomingMessages() {
  setTimeout(() => {
    $.get('https://cw-quotes.herokuapp.com/api/quotes/random', data => {
      const msg = new Message(data.result.text, false, Date.now());

      showMessage(msg);
      scrollToBottom();
    });
  }, genRandomMs());
}

// function displayDb (db) {
//   for (let i = 0; i < db.msgs.length; i++) {
//     showMessage(db.msgs[i].content, db.msgs[i].authorId, db.msgs[i].timestamp);
//   }
// }
function scrollToBottom() {
  const $messages = $('.messages-container');
  $messages.animate({
    scrollTop: $messages[0].scrollHeight
  });
}

function dbMessages() {
  $.get('http://localhost:3000/messages', data => {
    data.forEach(msg => {
      showMessage(msg);
    });
    scrollToBottom();
  });
}

function postMessage(msg) {
  $.ajax({
    url: '/messages',
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(msg)
  });
}

$(() => {

  console.log('starting script');
  //$.post('http://localhost:3000/messages', msg);
  dbMessages();
  $('#msg-form').on('submit', (e) => {

    e.preventDefault();
    const content = $('#text').val();
    if (content) {
      $('#text').val('');
      const msg = new Message(content, true, Date.now());
      postMessage(msg);
      showMessage(msg);
      scrollToBottom();
      simulateIncomingMessages();
    }
  });
});


// module.exports = displayDb;

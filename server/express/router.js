const express = require('express');
const { request, response } = require('express');
const messageController = require('./controllers/messages.controller');
const router = express.Router();


router.get('/messages', messageController.getMessages);
router.post('/messages', messageController.postMessages);

module.exports = router; 

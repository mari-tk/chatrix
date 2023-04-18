const express = require('express');
const router = express.Router();
const chatsCtrl = require('../../controllers/api/chats');

// POST /api/chats
router.post('/', chatsCtrl.sendMessage);
router.get('/', chatsCtrl.getAllMessages);

module.exports = router;

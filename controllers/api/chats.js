const Message = require('../../models/message')

module.exports = {
  sendMessage,
  getAllMessages
}

async function sendMessage(req, res) {
  try {
    const message = await Message.create({message: req.body.message, userId: req.user});
    res.json(message);
  } catch (error) {
    res.status(400).json(error);
  }
}

async function getAllMessages(req, res) {
  try {
    const messages = await Message.find({}).sort('createdAt');
    res.json(messages);
  } catch (error) {
    res.status(400).json(error);
  }
}
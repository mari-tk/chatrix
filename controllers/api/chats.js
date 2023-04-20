const Message = require('../../models/message')

module.exports = {
  sendMessage,
  getAllMessages
}

async function sendMessage(io, socket, message) {
  console.log(`User '${socket.user.name}' sent message ${message}`);
  const dbMessage = await Message.create({message, userId: socket.user});
  io.emit('receive_message', dbMessage);
}

async function getAllMessages(req, res) {
  try {
    const messages = await Message.find({}).populate('userId').sort('createdAt');
    res.json(messages);
  } catch (error) {
    res.status(400).json(error);
  }
}
//variables
const express = require('express');
const path = require('path');
const http = require('http');
const logger = require('morgan');
require('dotenv').config();
const { Server } = require('socket.io');
const jwt = require('jsonwebtoken');
require('./config/database');
const { sendMessage } = require('./controllers/api/chats');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.use(require('./config/checkSocketToken'));
console.log(io.engine.clientsCount);

io.on('connection', (socket) => {
  console.log(`[${socket.id}] User '${socket.user.name}' connected`);

  const emitActiveUsers = () => {
    const users = Array.from(io.sockets.sockets.values())
      .map(socket => socket.user.name);
    users.sort();
    io.emit('active_connections', users);
  };

  socket.on('send_message', async ({ message }) => {
    await sendMessage(io, socket, message);
  });

  socket.on('disconnect', () => {
    console.log(`[${socket.id}] User '${socket.user.name}' disconnected`);
    emitActiveUsers();
  });

  emitActiveUsers();
})

//middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));
app.use(require('./config/checkToken'));

//routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/chats', require('./routes/api/chats'));

//catch all
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

//listener
const port = process.env.PORT || 3000;
server.listen(port, function () {
  console.log(`Express app running on port ${port}`)
});

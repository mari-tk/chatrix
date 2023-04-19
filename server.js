//variables
const express = require('express');
const path = require('path');
const http = require('http');
const logger = require('morgan');
require('dotenv').config();
require('./config/database');
const cors = require('cors');

const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
  }
});

io.on('connection', (socket) => {
  console.log(`User connected with socket id ${socket.id}`);
  
  socket.join('main');
  console.log(`User joined room Main with socket id ${socket.id}`);

  socket.on('send_message', (data) => {
    console.log(`User ${data.user.name} sent message ${data.message}`);
    socket.in('main').emit('receive_message', data);
  })

  socket.on('disconnect', () => {
    console.log('User disconnected', socket.id);
  })
});

//middleware
app.use(cors());
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
app.listen(port, function () {
  console.log(`Express app running on port ${port}`)
});

//socket io server
server.listen(3001, function () {
  console.log(`socket.io app running on port 3001`)
});
//variables
const express = require('express');
const path = require('path');
const http = require('http');
const logger = require('morgan');
require('dotenv').config();
require('./config/database');
const app = express();
const server = http.createServer(app);
const cors = require('cors');

// socket.io server 
io = require('./io');
io.attach(server);

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
app.listen(port, function () {
  console.log(`Express app running on port ${port}`)
});
const io = require('socket.io')();

  // Listen for new connections from clients (socket)
  io.on('connection', function(socket) {
    console.log('new client connected');
    socket.on('message', message => {
      console.log(`message from ${socket.id} : ${message}`);
    });

    socket.on('disconnect', message => {
      console.log(`socket ${socket.id} disconnected`);
    });
  });
  
 module.exports = io;
const jwt = require('jsonwebtoken');

module.exports = function(socket, next) {
  // Check for the token being sent in a header or as a query parameter
  let { token } = socket.handshake.auth;
  if (token) {
    // Remove the 'Bearer ' if it was included in the token header
    token = token.replace('Bearer ', '');
    // Check if token is valid and not expired
    jwt.verify(token, process.env.SECRET, function(err, decoded) {
      if (err) {
        return next(new Error("wrong token"));
      }
      // If valid token, decoded will be the token's entire payload
      // If invalid token, err will be set
      socket.user = decoded.user;  
      // If your app cares... (optional)
      socket.exp = new Date(decoded.exp * 1000);  
      return next();
    });
  } else {
    next(new Error("no token"));
  }
};
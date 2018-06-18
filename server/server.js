var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// allows cross origin resource sharing
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

io.on('connection', function(socket){
    // console.log('This works')
  socket.on('Test Room', (message) => {
    //   console.log("This works too")
      if(message.msg[0] == "$"){
          console.log("Detected a command:",message)
          io.sockets.emit("Test Room",message)
      }
      else{
          console.log("I got this message:",message)
        io.sockets.emit("Test Room", message);
      }
    
  });
});

var server = http.listen(3001, () => {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
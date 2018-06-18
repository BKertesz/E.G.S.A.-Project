var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
const command = require('./tools/commands')
const MongoClient = require('mongodb').MongoClient
const ObjectID = require('mongodb').ObjectID;

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
          // console.log('This executes')
          const commandReturn = command(message.usr,message.msg)
          const returnMsg = (message.usr,commandReturn)
          //save to db
          io.sockets.emit("Test Room",returnMsg)
  });
});

var server = http.listen(3001, () => {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Server running at http://%s:%s', host, port);
});

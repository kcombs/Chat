var express = require('express'),
    http = require('http'),
    socketio = require('socket.io'),
    app = express()



app.get('/', function(req, res) {
    res.send('testing');
})


var server = app.listen('3000', function() {
    console.log('Listening on Port 3000');
})

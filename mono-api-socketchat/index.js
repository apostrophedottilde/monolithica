const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const nsp = io.of('/channel9');

nsp.on('connection', function(socket){
    console.log('a user connected');

    socket.on('disconnect', function(){
        console.log('user disconnected');
    });

    socket.on('chat message', function(msg){
        console.log('message received on server: ' + msg);
        nsp.emit('chat message', msg);
    });
});

nsp.emit('hi', 'everyone!');

http.listen(8080, function(){
    console.log('listening on *:8080');
});
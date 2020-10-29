const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');

const {addUser,removeUser,getUser} = require ('./user');

const app = express();
const router = require('./router');
const server = http.createServer(app);
const portNo = 3001;
const serverAddr = "http://ssal.sparcs.org";

app.use(cors());
app.use(router);

server.listen(portNo, () => console.log('Server Listen: ', serverAddr + ":" + portNo));
const io = socketio.listen(server);

io.on('connect', (socket) => {
    socket.on('join', ({ name }, callback) => {
        const {error,user} = addUser({id: socket.id,name});

        if(error) {return callback(error);}
        
    });

    socket.on('sendMessage', (message, callback) => {

    });

    socket.on('disconnect', () => {

    })
});
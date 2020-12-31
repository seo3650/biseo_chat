const http = require('http');
const socketio = require('socket.io');
const dotenv = require('dotenv');
dotenv.config();

const {addUser, removeUser, getUser, getUsers, isDuplicatedUser} = require ('./user');

const app = require('./app');
const server = http.createServer(app);
const portNo = 3001;
const serverAddr = "http://moby.sparcs.org";
const moment = require('moment');
require('moment-timezone');
moment.tz.setDefault("Asia/Seoul");

const jwt = require('jsonwebtoken');

server.listen(portNo, () => console.log('Server Listen: ', serverAddr + ":" + portNo));
const io = socketio.listen(server);

io.on('connect', (socket) => {
    let decoded = ''
    try {
        decoded = jwt.verify(socket.handshake.query['token'], process.env.JWT_SECRET);
    } catch (err) {}
    
    const name = decoded.sparcs_id;
    
    if (isDuplicatedUser(name)) {
        socket.disconnect();
    }
    ret = addUser({ id: socket.id, name })
    
    socket.emit('name', {
        name
    });
    socket.emit('message', { 
        user: 'admin', 
        text: `${name}, welcome to chat service`,
        time: moment().format('MM-DD HH:mm:ss')
        });
    if (!ret.error)
        socket.broadcast.emit('message', { user: 'admin', text: `${name} has joined!` });

    io.emit('roomData', {  
        users: getUsers() 
    });

    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id);
        
        io.emit('message', { 
            user: user.name, 
            text: message,
            time: moment().format('MM-DD HH:mm:ss')
         });
        
        callback();
    });

    socket.on('disconnect', () => {
        const user = removeUser(socket.id);

        if(user) {
            io.emit('message', { user: 'admin', text: `${user.name} has left.` });
            io.emit('roomData', { users: getUsers });
        }
    })
});
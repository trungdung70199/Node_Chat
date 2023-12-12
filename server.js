// call express module
const express = require('express')
// call http createServer module 
const { createServer } = require('node:http');
// call Socket.io Sever module
const { Server } = require('socket.io');

// Make Express server
const app = express();
const server = createServer(app);

// Make Socket.io
const io = new Server(server);

// Call .env
const dotenv = require('dotenv');
dotenv.config();
const host = process.env.HOST
const port = process.env.PORT

// Server setting
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

//Socket.io
io.on('connection', (socket) => {
    console.log('connected!!!')
})


// start server
server.listen(port, host, () => {
    console.log(`listening on http://${host}:${port}`);
})

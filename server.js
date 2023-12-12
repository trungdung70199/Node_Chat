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
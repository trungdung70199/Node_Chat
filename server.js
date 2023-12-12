// call express module
const express = require('express')
// make server
const app = express();
// http module and express connect
const http = require('http').createServer(app)

const io = require('socket.io')(http)

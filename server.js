// // call express module
// const express = require('express')
// // call http createServer module 
// const { createServer } = require('node:http');
// // call Socket.io Sever module
// const { Server } = require('socket.io');

// // Make Express server
// const app = express();
// const server = createServer(app);

// // Make Socket.io
// const io = new Server(server);

// // Call .env
// const dotenv = require('dotenv');
// dotenv.config();
// const host = process.env.HOST
// const port = process.env.PORT

// // Server setting
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(__dirname + '/public'));

// //Socket.io
// io.on('connection', (socket) => {
//     console.log('connected!!!')

//     // chat message
//     socket.on('chat_message', (data) => {
//         console.log(socket.id);
//         console.log(data);
//         // add user socket id
//         data.socket_id = socket.id;
//         // send message to user
//         io.emit('chat_message', data);
//     })
// })

// // start server
// server.listen(port, host, () => {
//     console.log(`listening on http://${host}:${port}`);
// })


// express module 読み込み
const express = require('express')
// http の createServer module 読み込み
const { createServer } = require('node:http');
// Socket.io の Sever module 読み込み
const { Server } = require('socket.io');

// Expressサーバー作成
const app = express();
// サーバの設定
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

const server = createServer(app);

// Socket.io を作成
const io = new Server(server);

// .envの読み込み
const dotenv = require('dotenv');
dotenv.config();
const host = process.env.HOST
const port = process.env.PORT

//Socket.ioの接続
io.on('connection', (socket) => {
    console.log('connected!!!')

    //chatメッセージの受信
    socket.on('chat_message', (data) => {
        console.log(socket.id);
        console.log(data);
        //送信ユーザのSocketIDを追加
        data.socket_id = socket.id;
        //接続しているユーザにメッセージを送信
        io.emit('chat_message', data);
    })
})


//サーバ起動
server.listen(port, host, () => {
    console.log(`listening on http://${host}:${port}`);
})
// console.log('hello');
// // Websocket URL
// const url = '';
// // Websocket connect
// var socket = io.connect(url);

// // chat message
// socket.on('chat_message', (data) => {
//     console.log(data);
//     var p = document.createElement('p');
//     p.innerHTML = data.message;
//     document.getElementById('messageList').append(p);
// })

// function sendMessage() {
//     var message = document.getElementById('message').value;
//     console.log(message);
//     // chat server send message
//     socket.emit('chat_message', {
//         message: message,
//     })
// }


console.log('hello');

// WebsocketのURL
const url = '';
// Websocketの接続
var socket = io.connect(url);

// chatメッセージの受信
socket.on('chat_message', (data) => {
    console.log(data);
    var p = document.createElement('p');
    p.innerHTML = data.message;
    document.getElementById('messageList').append(p);
})

function sendMessage() {
    var message = document.getElementById('message').value;
    console.log(message);
    // chatサーバにメッセージを送信
    socket.emit('chat_message', {
        message: message,
    })
}
console.log('hello');
// Websocket URL
const url = '';
// Websocket connect
var socket = io.connect(url);

// chat message
socket.on('chat_message', (data) => {
    console.log(data);
    var p = document.createElement('p');
    p.innerHTML = data.message;
    document.getElementById('messageList').append(p);
})

function sendMessage() {
    var message = document.getElementById('message').value;
    console.log(message);
    // chat server send message
    socket.emit('chat_message', {
        message: message,
    })
}


console.log('hello')
// Websocket URL
const url = '';
// Websocket connect
var socket = io.connect(url);

function sendMessage() {
    var message = document.getElementById("message").value;
    console.log(message);
}

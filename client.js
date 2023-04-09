//client.js
let io = require('socket.io-client');
let socketIO = io.connect('https://jsjperu.org:1000', {reconnect: true,secure: true,rejectUnauthorized:true,query: { clientId: "WAS10424517912","sala":"10424517912" }});

socketIO.on('estado_ws', ()=>{
    console.log("alguien esta pidiendo el estado");
    socketIO.emit('estado_ws',clienteWS);
});

socketIO.on('bienvenida', (data) => {
    console.log(data);
  });




class ClienteIO {

}


module.exports = {socketIO,ClienteIO};


/** 
socket.on('connect', function (socket) {
    console.log('Connected!');
});


let enviaQR=()=>{
    socket.emit('was qr', 'mememememememem');
}

socket.emit('CH01', 'me', 'test msg');

*/
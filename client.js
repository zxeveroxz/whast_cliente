//client.js
let io = require('socket.io-client');
let socketIO = io.connect('https://jsjperu.org:1000', 
                                                    {reconnect: true,
                                                    secure: true,
                                                    rejectUnauthorized:true,
                                                    query: { clientId: `WAS${RUC}`,"sala":RUC }
                                                });

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

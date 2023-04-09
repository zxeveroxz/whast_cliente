const { Client, LocalAuth } = require('whatsapp-web.js');

global.clienteWS = null; //variable global del estado del cliente del whatsapp

const {socketIO} = require('./client.js');
const QR = require('qrcode');

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer:{
        headless:true,
        args: ['--no-sandbox', '--no-first-run']
    }
});



socketIO.on('connect', function () {
    console.log('Connected!');
    
    if(clienteWS===null){
        client.initialize();
        clienteWS ="INICIALIZANDO";
    }
});

client.on('qr', async (qr) => {    
    clienteWS ="QR"
    let qr_url = await QR.toDataURL(qr);
    socketIO.emit('leer_qr',   qr_url);
    //console.log(qr_url);
});


client.on('ready', () => {
    console.log('Client is ready!');
    clienteWS ="READY";
});

client.on('disconnected', () => {
    clienteWS=null;
    console.log('Client is disconnected');
});

client.on('auth_failure', () => {
    clienteWS=null;
    console.log('Client is auth_failure');
});


socketIO.on('iniciar_ws', ()=> {
console.log("se esta pidiendo iniciar nuevamente el was");
    if(clienteWS===null){
        client.initialize();
        clienteWS ="RE-INICIALIZANDO";
    }
});



 
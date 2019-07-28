const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req, res)=>{
	res.sendFile(__dirname+'/index.html');
});

let messages = [];

io.on('connection', (socket)=>{

	//for(let message of messages){
		//io.emit('msg send', message);
	//}

	console.log('um usuario conectado');

	socket.on('msg send', (msg)=>{
		console.log(msg);
		messages.push(msg);

		io.emit('msg send', msg);
	});

	socket.on('disconnet', ()=>{
		console.log('usuario desconectado');
	});

});

http.listen(2000, ()=>{
	console.log('ouvindo a porta: 2000');
});
var app = require('./server_config.js');
var algumCtrl = require('./controller/algumCtrl.js');
var validator = require('validator'); //medida de segurança
var http = require('http');

//overview of Req e Res - http://www.murvinlai.com/req-and-res-in-nodejs.html
//				https://webapplog.com/url-parameters-and-routing-in-express-js/
app.get('/', function(req, res){
	//res.end("Você está conectado. Por favor navegue para o endereco <a href='http://localhost:8080'>http://localhost:8080</a>");
	res.sendFile(__dirname + "/index_deprecated.html");
	console.log("Aguardando redirecionamento para: http://localhost:8080");
});

app.get('/teste', function(req, res){
	res.end("Estamos em teste!");
	console.log("Estamos em teste, console!");
});

/*******  Operacoes nos filmes  ********/
app.get('/movies', function(req, res){
	//res.end("Pegando lista de usuarios");
	console.log("Pegando lista de filmes.");
	algumCtrl.list(function(resp){
		res.send(resp);
	});
	
});


console.log("Servidor ligado, navegue para o endereco: http://localhost:5000");
 /*Usado para o servidor de aplicação(nginx ou tomcat)
 	app.get('*', function(req, res) {
 	console.log("Servidor ligado, navegue para o endereco: http://localhost:5000");
	res.sendFile('/index.html', {root: __dirname});
	//res.sendfile('./public/index.html');
});*/
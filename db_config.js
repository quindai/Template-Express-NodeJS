var db_string = 'mongodb://127.0.0.1/seudb';
var mongoose = require('mongoose').connect(db_string);
var db = mongoose.connection;

var Schema1; //definir um nome

//Ver pasta controller

db.on('error', console.error.bind(console, 'Erro ao conectar com o mongodb!'));

db.once('open', function(){
 	console.log("Conectado ao MongoDB com sucesso!");
  	
  	//defina aqui seus Schemas do MongoDB
  	var algumSchema = mongoose.Schema({
 // 	colunas do banco de dados
	  	'id': String,		//*
	    'title': String, 	//*
	    'origlang': String,	//*
	    'origtitle': String,//*
	    'images': [{
	    		'poster': String,
	    		'backimage': String,
	    		'smallposter': String,
	    		'othersposter': []
	    		}]
	 });

console.log(mongoose.model('movies', algumSchema));
	// podemos usar os metodos do model do mongoose
	 exports.Schema1 = mongoose.model('AlgumSchema', algumSchema);
	 //pode exportar quantos schemas quiser
 });
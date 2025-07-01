
var nome="Sergio" //String
var sobrenome=" Santos"
var idade = 20 // Number
var ensinoSuperior = true //Boolean
var hora; //undefined //null
var novoDados = {} //Object

console.log(typeof nome);

var nomeCompleto = nome + ''+ sobrenome;

console.log(nomeCompleto)

var escola = "IFSP"; //string 
var unidade = 'IFSP';

var frase = 'Nome '+nome+' idade '+idade;

console.log(frase);

//template string

var frase2 = `Nome ${nome} idade ${idade}`;

console.log(frase2);

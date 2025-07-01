// Objeto - composto variávies e funções.

var pessoa = {
  nome:'Francisco',
  idade:59,
  profissao:'psor',
  temFaculdade:true,

  mostrarNome(){
    return this.nome;
  },
}

console.log(pessoa.nome);
console.log(pessoa.mostrarNome());

//criar um objeto 
var carro = {};

console.log(typeof carro);


var menu = {
   width: 800,
   height: 50,
   backgroundColor: '#84E',
}

//pegar um valor do objeto. 
// GET
var bg = menu.backgroundColor;

console.log(bg)

// atribuir um valor 
// SET

menu.backgroundColor = '#000';

console.log(menu.backgroundColor);

menu.position = 'fixed';

// this. referência ao próprio objeto.

var height = 120;

var menu2 = {
  width:800,
  height :50,

  metadeDaAltura(){
    return this.height / 2;
  }
}

var altura = menu2.metadeDaAltura();

console.log(altura);





































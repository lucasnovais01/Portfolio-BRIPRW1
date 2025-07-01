
// Escopo 

// Escopo da função. 

// Escopo da função Pai

var carro = 'Fusca';

function mostrarMeuCarro(){
  texto = `Meu carro é um ${carro}`
  console.log(texto);
}

mostrarMeuCarro();

console.log(texto);

// Escopo de bloco 

var verdade = true;

// toda variável definida com var no bloco
// vaza, escapa do bloco  

if (verdade){
  var carro1 = 'Fusca';

  console.log(carro1);
}

console.log('fora do bloco ',carro1);

// bloco 

{
  var caminhao="Ford";
  let ano = 2020;
}

console.log(caminhao);
//console.log(ano);

for (let i = 0; i < 10; i++){
  console.log(i);
}

//console.log(i)

var idade = 100;
console.log(idade);

var idade = 'cem';

console.log(idade);

const mes="dezembro";

//mes="Janeiro";

const semana='santa';

let ano = 2020; 
ano = 2010;



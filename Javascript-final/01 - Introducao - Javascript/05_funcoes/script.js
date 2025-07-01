
function areaQuadrado(lado){
  return lado * lado;
}

console.log(areaQuadrado(5));

function pi(){
  return 3.14;
}

var total = 5 * pi();

//console.log(total);

// parâmetros e argumentos. 
// var , let , const 

function calcularImc(peso, altura){
  const imc = peso /  (altura ** 2);
  ////console.log(imc);
}

var valorImc = calcularImc(80, 1.80);

//console.log('Imc = '+valorImc);

function suaCorFavorita(corFavorita){
  if (corFavorita === 'azul'){
    return 'você gosta do mar';
  } else if (corFavorita === 'verde') {
    return 'você gosta do palmeiras ';
  } else {
    return ' você não gosta de nada ';
  }

}  


//console.log(suaCorFavorita('verde'));

// escopo


function visitarPaises(paisesVisitados){
  var totalPaises = 193;
  return `Falta visitar ${totalPaises - paisesVisitados}`
} 

//console.log(visitarPaises(1));


var profissao = 'Programador';

function dadosPessoa(){
   var nome = ' Sérgio ';
   var idade = 49;

   function novosDados(){
      var endereco = "Pedro Cavalo ";
      var cep = 16200;

      return `${nome}, ${idade}, ${endereco}, ${profissao}`
   }
   return novosDados();
}

console.log(dadosPessoa());

console.log(novosDados());








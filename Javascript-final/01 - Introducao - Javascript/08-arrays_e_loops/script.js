// Array - vetor

var jogador = ['Pelé',
               'Rivelino',
               'Tostão'];

console.log(jogador[2]);

jogador.pop(); //remove o último item

console.log(jogador);

jogador.push('Zico'); // adiciona um elemento no final

console.log(jogador)

console.log(jogador.length);

for (var i=0; i < jogador.length; i++){
   console.log(jogador[i]);
}

var i = 0;
while (i < 4) {
  console.log(i);
  i++;
}

jogador.forEach(function(item){
  console.log(item);
});


var frutas =[ 'Banana',
            'Pera',
            'Maçã',
            'Abacaxi',
            'Uva'];

frutas.pop();


frutas.forEach(function(fruta, index){
  console.log(fruta, index);
})

// crie um array com os anos que o Brasil foi campeão
// Camel Case
var brasilCampeao = [1958, 1962, 1970, 1994, 2002 ];

console.log(brasilCampeao);

for (var i = 0; i < brasilCampeao.length; i++){
  console.log(` O Brasil ganhou as seguintes copas do mundo ${brasilCampeao[i]}`);
}

// operador ternário

var campeao = 1990;

var brasil = (campeao === 1990 ) ? 'Brasil ganhou a copa ' 
                               : ' Brasil perdeu a copa';

console.log(brasil);

var brasilPentaCampeao = false;

// if abreviado

if (brasilPentaCampeao){
   console.log('Sim é verdade')
} else {
  console.log('Não é verdade');
}




 



















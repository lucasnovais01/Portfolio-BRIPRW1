//foreach e arrow functions 
// a melhor maneira de selecionar é com queryselectorall
// método foreach

const imgs = document.querySelectorAll('img');
//três parâmetros  valor atual, posição, array
imgs.forEach(function(item, index, array){
   //console.log(item);
   //console.log(index);
   //console.log(array);
});

//foreach é array 
//é um método do array 
//array-like não é um array 
// mas é possível converter.

const titulos = document.getElementsByClassName('titulo');
//console.log(titulos);
const titulosArray = Array.from(titulos);

titulosArray.forEach(function(item){
 //console.log(item);
});

// Arrow function
// sintaxe curta em relção a function expression - function name() 
// => arrow 

const imagens = document.querySelectorAll('img');

//titulosArray.forEach(function(item){});

imagens.forEach((item)=>{
  //console.log(item);
});

imagens.forEach(item=>{
   //console.log(item);
});

imagens.forEach((item, index)=>{
  //console.log(item, index);
})

//let i=0;
//imagens.forEach(()=>console.log(i++));






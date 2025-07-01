// Selecionar elementos do DOM

// getElementById = seleciona um elemento do DOM 

const selecaoAnimais = document.getElementById('animais');
//console.log(selecaoAnimais);

// getElementByClassName = seleciona e retorna uma lista do elemento
const gridAnimais = document.getElementsByClassName('grid-section')

//console.log(gridAnimais);

const listaContato = document.getElementsByClassName('grid-section contato');
//console.log(listaContato)

// getElementByTagName 

const ul = document.getElementsByTagName('ul');
//console.log(ul[n]) n = elementos da sua lista 
//console.log(ul);

//Seletor Geral e único 
// Seletor único 
// querySelector - pega a primeira ocorrência  

const animais = document.querySelector('.animais');

//console.log(animais);

const animaisDescricao = document.querySelector('.animais-descricao')

//console.log(animaisDescricao);

const contato = document.querySelector('#contato')
//console.log(contato);

const primeiraUl = document.querySelector('li');
//console.log(primeiraUl);

const link = document.querySelector('[href^="#"]');

//console.log(link);

// Seletor geral 

//querySelectorAll - retorna todos os elementos compativeis 
//com seletor css em uma NodeList

const gridSection = document.querySelectorAll('.grid-section');

//console.log(gridSection);

const lista = document.querySelectorAll('ul');
//console.log(lista);

const titulos = document.querySelectorAll('.titulo');
//console.log(titulos[1]);
//HtmlCollection 

const gridSelectionHtml = document.getElementsByClassName('grid-section');
//console.log(gridSelectionHtml);

//NodeList
const gridSelectionNode = document.querySelectorAll('.grid-section')
//console.log(gridSelectionNode);

//gridSelectionHtml.forEach(element => {
  
//});
// estática 


// as duas são Array-like 
// array nodelist - foreach 

gridSelectionNode.forEach(function(gridItem, index, array){
  gridItem.classList.add('vermelho');
  //console.log(index);
  //console.log(array);
})

// Retorne no console todas as imagens do site
const img = document.querySelectorAll('img');
//console.log(img);


// Retorne no console apenas as imagens que começam com a 
//palavra imagem

const todasImagens = document.querySelectorAll('img[src^="img/imagem"]');
//console.log(todasImagens);

//Selecione todos links internos do site ( onde o href começa com #)

const todosLinks = document.querySelectorAll('[href^="#"]');
//console.log(todosLinks);


//selecioe o primeiro h2 dentro de .animais-descricao
const animais1 = document.querySelector('.animais-descricao');

const h2animais = animais1.querySelector('h2');

console.log(h2animais);


 
















img = document.querySelector('img');
// recomendado em usar o callback 
function funcao(e){
  //console.log('clicou');
}

img.addEventListener('click', funcao);
   
img.addEventListener('click', function(){
  //console.log('clicou ')
});


// primeiro parâmetro é ação = esperado
// segundo parâmetro é a função a ser executada. callback

const animaisLista = document.querySelector('.animais-grid');

//console.log(animaisLista)

function executaCallBack(e){
   const currentTarget = e.currentTarget;
   const target = e.target;
   const type = e.type;

   console.log('todos os objetos ');
   console.log( currentTarget ); 
   console.log(' objeto específico')
   console.log(target);
   console.log('tipo do evento ');
   console.log(type);
 
}

animaisLista.addEventListener('click',executaCallBack);


const link = document.querySelector('a[href^="#"]');

function clickNoLink(e){
  e.preventDefault();  // evita o comportamento padrãode carregamento das páginas.
  //console.log(this);
  //this - palavra reserva do javascript serve para fazer referência a próprio objeto. 
  //console.log(e.currentTarget.href);
  //console.log(this.getAttribute('href'));
}


link.addEventListener('click',clickNoLink);

function callKey(e){
  
  if (e.key === 'a'){
    document.body.classList.toggle('azul')
  } else if (e.key==='v') {
    document.body.classList.toggle('verde');
  }
}


window.addEventListener('keydown', callKey);



// selecione todo os elementos do site 
// começando a partir do body, ao clique 
// mostre exatamente quais elementos estão 
// sendo clicados 

const todosElementos = document.querySelectorAll('body *');

function mostraElemento(e){
  //console.log(e.currentTarget.getAttribute());
  e.currentTarget.remove(); /* remove o elemento */
}


todosElementos.forEach((elemento)=>{
  elemento.addEventListener('click',mostraElemento)
})



// com o código anterior, ao invés de mostrar no 
// console, remova o elemento que está sendo clicado 
 


// se o usuário clicar na tecla (t) aumento todo o 
// texto do site. 

function handleClick(e){
  if (e.key === 't'){
    document.documentElement.classList.toggle('textoMaior');
  }
}



window.addEventListener('keydown',handleClick)
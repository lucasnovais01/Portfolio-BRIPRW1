
function initTabNav() {

  // pegando todas as (somente ) imagens dos animais
  const tabMenu = document.querySelectorAll('img');
  // pegando todas os itens dos animais 
  const animaisItens = document.querySelectorAll('.animal-item');


  let activeIndex = null;

  function showAll(){
    
    animaisItens.forEach((item)=>{
      console.log('remove a classe oculto');
      item.classList.remove('oculto','ativo');
    })
    activeIndex = null;
  }


  function showOnly(index){
    
    animaisItens.forEach((item, i)=>{
      if (i===index){
        item.classList.remove('oculto')
        void item.offsetWidth; //força o refk=low para reiniciar a animação
        item.classList.add('ativo');
      } else {
        console.log('adicionando a classe oculto ')
        item.classList.add('oculto')
      }
    })
    activeIndex = index;
  }


  tabMenu.forEach((itemMenu, index) => {
    
    itemMenu.addEventListener('click', () => {

      if (activeIndex === index)  {
        showAll(); //mostrar todas as imagens "novamente"
      } else  {
        showOnly(index); // ocultar todas as imagens e exibe somente a selecionada.
      }
    })

  })

} 

initTabNav();


function initAccordion() {
  
  const accordionList = document.querySelectorAll('.js-accordion dt');
  const classeAtiva = 'ativo';   
  
  accordionList[0].classList.add(classeAtiva);   /* inclui no primeiro elemento */
  accordionList[0].nextElementSibling.classList.add(classeAtiva); 
  function activeAccordion(){
    this.classList.toggle(classeAtiva);   /* inclui no demais elementos / remove  */
    this.nextElementSibling.classList.toggle(classeAtiva);
    
  }
  
  accordionList.forEach(( item ) => {
    item.addEventListener('click', activeAccordion);
  });

}
initAccordion();


function initScrollSuave() {
  
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrolltoSection(e){
     e.preventDefault();
     const href = e.currentTarget.getAttribute('href');
     const section = document.querySelector(href);
     section.scrollIntoView({
      behavior :'smooth',   //transição suave 
      block:'start',        //no início de cada section.
     });
  }
  
  linksInternos.forEach((item)=> {
    item.addEventListener('click',scrolltoSection);
  });

}
initScrollSuave();





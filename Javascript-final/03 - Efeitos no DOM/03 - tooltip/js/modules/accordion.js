
export default function initAccordion() {
  
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

export function teste(){

}

export function teste2(){

}


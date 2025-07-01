
export default function initScrollSuave() {
  
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



export default function initTooltip(){

   const tooltips = document.querySelectorAll('[data-tooltip]');
   
   tooltips.forEach((item)=>{
    item.addEventListener('mouseover', onMouseOver);
   })

   function onMouseOver(e) {
      
     const toolTipBox = criarToolTipBox(this);
    
     onMouseMove.toolTipBox = toolTipBox;  //criado um objeto
     this.addEventListener('mousemove',onMouseMove);  //evento no window
     
     onMouseLeave.toolTipBox = toolTipBox;
     onMouseLeave.element = this;
     this.addEventListener('mouseleave',onMouseLeave); //adicionando um evento no window
   }

   const onMouseLeave = {
    handleEvent(e){   //tenho que ter a função handleEvent
      this.toolTipBox.remove();
      this.element.removeEventListener('mousemove',onMouseMove);
      this.element.removeEventListener('mouseleave',onMouseLeave);
    }
   }

   const onMouseMove = {
    handleEvent(e){
       this.toolTipBox.style.top = e.pageY+20+'px';  //pegar as coordenadas da pagina "div" em relação top eixo y
       this.toolTipBox.style.left = e.pageX+20+'px'; //pegar as coordenadas da pagina "div" no eixo x 
    }
   }



  function criarToolTipBox(element){
      const tooltipBox = document.createElement('div'); //criar a div
      const text = element.getAttribute('aria-label');  //pegar o texto 
      tooltipBox.classList.add('tooltip'); //adiciona a classe 
      tooltipBox.innerText = text;        // adicionar o text no dom 
      document.body.appendChild(tooltipBox); //no final da página
      return tooltipBox;

  }
 
   
}
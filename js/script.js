console.log("Abaixo estão os códigos de Javascript do index.html");


import { setupAccordion } from './main1.js';
import { ativarBotaoSobreMim } from './main2-btn.js';
import { setupMenuProjetosDropdown } from './menu1.js';


document.addEventListener('DOMContentLoaded', function() {
    setupAccordion();
    ativarBotaoSobreMim();
    setupMenuProjetosDropdown();
});



// Aqui, abaixo é o import de páginas não usadas 'ainda'
/*
import { setupAulasTabs } from './pagina2.js/aulas1.js';

document.addEventListener('DOMContentLoaded', function() {

    setupAulasTabs();

}
*/

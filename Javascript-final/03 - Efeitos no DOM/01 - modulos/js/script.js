import initAccordion from "./modules/accordion.js";
import initAnimacaoScroll from "./modules/scroll-animacao.js";
import initTabNav from "./modules/tabnav.js";
import initScrollSuave from "./modules/scroll-suave.js";
//import { teste } from "./modules/accordion.js";

import { SERVIDOR } from "./modules/constantes.js";


initScrollSuave();
initAnimacaoScroll();
initAccordion();
initTabNav();
//teste();

console.log(SERVIDOR);




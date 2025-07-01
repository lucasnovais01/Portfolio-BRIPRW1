console.log("Abaixo estão os códigos de Javascript do index.html");


import { setupAccordion } from './main1.js';
import { setupAulasTabs } from './aulas1.js';

document.addEventListener('DOMContentLoaded', function() {
    setupAccordion();
    setupAulasTabs();
});

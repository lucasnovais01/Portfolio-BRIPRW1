console.log("Abaixo estão os códigos de Javascript do index.html");

/* O código abaixo é para os botões */

document.getElementById("variaveisBtn").addEventListener("click", function() {
    toggleSections("variavelSection");
});

document.getElementById("tipo_dadosBtn").addEventListener("click", function() {
    toggleSections("tipoDadosSection");
});

document.getElementById("num_operadoresBtn").addEventListener("click", function() {
    toggleSections("numOperadoresSection");
});

document.getElementById("booleansBtn").addEventListener("click", function() {
    toggleSections("booleansSection");
});

document.getElementById("funcoesBtn").addEventListener("click", function() {
    toggleSections("funcoesSection");
});

document.getElementById("objetosBtn").addEventListener("click", function() {
    toggleSections("objetosSection");
});

// Função para alternar a visibilidade das seções
function toggleSections(sectionId) {
    // Esconde todas as seções
    let sections = document.querySelectorAll("section[id$='Section']");
    sections.forEach(function(section) {
        section.style.display = "none";
    });

    // Exibe a seção selecionada
    document.getElementById(sectionId).style.display = "block";
}

console.log("Abaixo estão os códigos de Javascript do index.html");
/*
Nesta página script.js pretendo colocar os códigos javascript diretamente na página index.html

Para outras páginas vou criar outras páginas de script.js
*/

/* Entenda o que está acontencendo:

document = refere-se ao documento HTML, é uma API do DOM (observação: Não funciona no WIX, eu testei, WIX não usa API DOM)
    Através do objeto document, podemos interagir com o conteúdo da página HTML, como acessar elementos, modificar atributos, ou até mesmo alterar o conteúdo da página.

getElementById(" id ") = O getElementById é um método do objeto document, usado para localizar e acessar um elemento específico da página HTML pelo seu id.
    recebe como parâmetro o ID de um elemento HTML e retorna esse elemento, caso ele exista.

addEventListener("click", function() { ... }) = é um método que permite adicionar um ouvinte de evento (um "listener") a um elemento HTML. 
                                                Ele diz ao navegador para escutar quando um evento específico ocorrer nesse elemento.
"click" =  é o tipo de evento que estamos dizendo ao navegador para "escutar" os cliques sobre o botão referenciado.
function() { ... } = Será chamada quando o evento de clique ocorrer. Essa função contém o código que será executado no momento em que o evento acontecer. Isto é chamado Callback

function() {
    toggleSections(" id "); = Quando acontecer o callback, o código executa o comando toggleSections(" id ");


toggleSections("variavelSection") chama uma outra função chamada toggleSections. Essa função está sendo usada para alternar a visibilidade de seções na página (presumivelmente, ela exibe uma seção e oculta as outras).

*/

// O código abaixo é para os botões do main do index.html

document.getElementById("variaveisBtn").addEventListener("click", function() {
    toggleSections("variavelSection");
});

document.getElementById("tipoDadosBtn").addEventListener("click", function() {
    toggleSections("tipoDadosSection");
});

document.getElementById("numOperadoresBtn").addEventListener("click", function() {
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

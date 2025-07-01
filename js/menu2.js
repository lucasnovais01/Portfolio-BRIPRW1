


/* Entenda o que está acontencendo:
PARTE 1:

document = refere-se ao documento HTML, é uma API do DOM (observação: Não funciona no WIX, eu testei, WIX não usa API DOM)
    Através do objeto document, podemos interagir com o conteúdo da página HTML, como acessar elementos, modificar atributos, ou até mesmo alterar o conteúdo da página.

getElementById(" id ") = O getElementById é um método do objeto document, usado para localizar e acessar um elemento específico da página HTML pelo seu id.
    recebe como parâmetro o ID de um elemento HTML e retorna esse elemento, caso ele exista.

        obs: existe tb o getElementsByClassName (este é pra classes)

addEventListener("click", function() { ... }) = é um método que permite adicionar um ouvinte de evento (um "listener") a um elemento HTML. 
                                                Ele diz ao navegador para escutar quando um evento específico ocorrer nesse elemento.
"click" =  é o tipo de evento que estamos dizendo ao navegador para "escutar" os cliques sobre o botão referenciado.
function() { ... } = Será chamada quando o evento de clique ocorrer. Essa função contém o código que será executado no momento em que o evento acontecer. Isto é chamado Callback

function() {
    toggleSections(" id "); = Quando acontecer o callback, o código executa o comando toggleSections(" id ");

toggleSections(" id ") chama uma outra função chamada toggleSections. Essa função está sendo usada para alternar 
a visibilidade de seções na página (presumivelmente, ela exibe uma seção e oculta as outras).

PARTE 2:

function toggleSections(sectionId) = Ela recebe um parâmetro sectionId, que é o ID da seção que queremos exibir

let sections = document.querySelectorAll("section[id$='Section']"); = 

querySelectorAll("section[id$='Section']" = selecionar todos os elementos section que possuem um ID que termina com 'Section'.

"section[id$='Section']" = usa um atributo de correspondência com o operador $=, que significa "termina com". Ou seja, ele seleciona todas as seções cujo ID termina com a palavra "Section".
O querySelectorAll retorna todos os elementos que atendem a esse critério. O resultado é armazenado na variável sections, que é uma NodeList (uma lista de nós, ou elementos).

sections.forEach(function(section) { section.style.display = "none"; }); = a NodeList de seções (usando o método forEach), e para cada seção, definimos a propriedade CSS display como "none".
    Isso esconde todas as seções da página, pois a configuração de display: none Remove a seção da visualização.

document.getElementById(sectionId).style.display = "block"; = Após esconder todas as seções, essa linha exibe a seção selecionada.
    Usando o getElementById(sectionId) para localizar o elemento da seção com o ID que foi passado como argumento
    A seguir, modificamos o ESTILO dessa seção definindo a propriedade display como "block", o que faz com que a seção se torne visível na página.


Resumo: O código primeiro esconde todas as seções e, em seguida, exibe a seção correspondente ao ID passado para a função.
*/

// PROJETO DE MENU, temporiamente parado
// PARTE 1:
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

// PARTE 2:
// Função para alternar a visibilidade das seções
function toggleSections(sectionId) {
    
    let sections = document.querySelectorAll("section[id$='Section']");
    sections.forEach(function(section) {
        section.style.display = "none";     // Esconde todas as seções
    });
    
    document.getElementById(sectionId).style.display = "block"; // Exibe a seção selecionada
}

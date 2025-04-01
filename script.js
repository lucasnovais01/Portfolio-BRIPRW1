console.log("Abaixo estão os códigos de Javascript do index.html");
/*
Nesta página script.js pretendo colocar os códigos javascript diretamente na página index.html

Para outras páginas vou criar outras páginas de script.js

https://www.w3schools.com/jsref/met_document_getelementbyid.asp

https://www.w3schools.com/HOWTO/howto_js_toggle_hide_show.asp
*/

/* Material de estudo (APAGAR DEPOIS):
- O ponto (.) é um operador de acesso a propriedades ou métodos de um objeto


O let é uma declaração de variável que tem um comportamento diferente do var e é mais recomendada para a maioria dos casos modernos de JavaScript. Vamos explicar as diferenças entre let, const e var:

let:
Permite declarar uma variável com escopo de bloco (isso significa que ela está visível apenas dentro do bloco {} em que foi declarada, como em loops ou funções).

Pode ter seu valor alterado após a declaração.

const:
Similar ao let, mas a variável não pode ser reatribuída após sua inicialização. Ou seja, uma vez que você atribui um valor a uma variável declarada com const, você não pode mudar esse valor.

const é utilizado para valores que não devem ser reatribuídos.

var:
A var tem escopo de função, o que significa que ela é visível dentro de toda a função em que foi declarada, e não respeita o escopo de bloco.

var também tem o comportamento de ser hoisted, ou seja, ela é elevada para o topo da função (ou escopo) onde é declarada, o que pode causar confusão em alguns casos.

Por que usar let ao invés de var ou const?
let é mais seguro do que var porque tem escopo de bloco. Isso ajuda a evitar erros em loops e estruturas de controle, já que a variável só existirá dentro do bloco onde foi declarada.

const seria mais adequado se você não for reatribuir a variável (por exemplo, em casos onde o valor da variável não vai mudar após sua atribuição), mas no seu caso, você pode querer alterar o valor de sections em alguns contextos, então let é a melhor escolha.

var é mais antigo e, em geral, não é mais recomendado para uso em código moderno, já que seu escopo de função e o comportamento de hoisting podem gerar confusão.
*/



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

// O código abaixo é para os botões do main do index.html
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

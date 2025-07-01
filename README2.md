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
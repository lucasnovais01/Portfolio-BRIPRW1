Portfólio 

Entrega do portfólio individual
DATA DE ENTREGA: 08/07/2025

Este repositório tem como objetivo centralizar e organizar todos os artefatos relacionados ao desenvolvimento do projeto, incluindo o código-fonte da aplicação e os arquivos de design criados no Figma.

Aqui estarão disponíveis:

Estrutura e implementação do código (frontend, backend ou ambos, conforme aplicável);

Protótipos e wireframes desenvolvidos no Figma;

Documentações complementares que auxiliem na compreensão e evolução do projeto.

Este repositório serve como base de colaboração entre desenvolvedores e designers, promovendo uma integração eficiente entre as áreas técnicas e de design.

*Dicas ao trabalhar com Branch:

"Começando a trabalhar com branch, digamos que vá usar outra máquina, além da sua máquina pessoal, como os computadores do IFSP"

1 - Comece clonando o repositório, pode usar o terminal do Github ou Git Bash e digite:

git clone https://github.com/JenniferFlorencio/ProjetoIFSP.git
O repositório clonado vai estar automáticamente em C:\Users\usuario\

Caso queira movê-lo para Downloads por exemplo, digite mv \User\usuario\ProjetoIFSP \Users\usuario\Downloads\

2 - Agora ENTRE no diretório, cd ProjetoIFSP (cd Downloads/ProjetoIFSP):

cd ProjetoIFSP
3 - Liste todas as branch, pra ver se sua branch está presente:

git branch -r
4 - TROQUE pra sua branch com:

git checkout nome-da-sua-branch
5 - Confirme que esteja na sua branch:

git branch
(é pra retornar *nome-da-sua-branch e embaixo main)

6 - Abra a pasta (code .) e não se esqueça de digitar:

git pull origin main
(O codigo acima vai fazer o pull e sincronizar com o main existente, já faz o commit pra sincronizar);

Lembre-se de digitar, TODA VEZ que entrar no visual code:

git checkout nome-da-conta (se aparecer a mensagem: Your branch is up to date with 'origin/main', vc está no MAIN e não no seu branch)

Para puxar do Main, digite:

git pull origin main
Verifique sua autoria nos commits Lembre-se de colocar na máquina:

git config --global user.email "seu@email.com"
git config --global user.name "seu nome"
Mas se ainda não tem uma branch, Para criar uma Branch, digite o nome no terminal,

git checkout -b nome-do-seu-branch

git checkout nome-da-conta
Outros - Não muito importante, só pra testes:

*Dicas para Backup:

1 - Entre no diretorio do "backup": cd backup 2 - Adicione o repositório original como remoto adicional:

git remote add backup-exemplo https://github.com/JenniferFlorencio/ProjetoIFSP.git
(você pode chamar esse remoto de qualquer nome, não precisa ser backup-exemplo)

3 - Busque as alterações do repositório original:

git fetch backup-exemplo
4 - Faça o merge da main do projeto original na sua main do backup:

git merge backup-exemplo/main
5 - Faça push para o seu repositório de backup no GitHub:

git push origin main

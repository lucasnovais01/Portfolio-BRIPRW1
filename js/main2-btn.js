

export function ativarBotaoSobreMim() {
  const btn = document.getElementById('toggleSobreMim');
  const conteudo = document.getElementById('sobreMimConteudo');

  if (btn && conteudo) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      conteudo.classList.toggle('ativo');
    });
  }
}
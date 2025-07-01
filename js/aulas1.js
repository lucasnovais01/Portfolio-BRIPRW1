import { setupAulasTabs } from './aulas1.js';
document.addEventListener('DOMContentLoaded', setupAulasTabs);

export function setupAulasTabs() {
  // Troca entre aulas
  const aulaTabs = document.querySelectorAll('.aula-tab');
  const aulaBlocos = document.querySelectorAll('.aula-bloco');
  aulaTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      aulaTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      aulaBlocos.forEach(bloco => bloco.style.display = 'none');
      document.getElementById(tab.dataset.aula).style.display = 'block';
    });
  });

  // Troca entre tópicos dentro de cada aula
  document.querySelectorAll('.aula-bloco').forEach(bloco => {
    const botoes = bloco.querySelectorAll('.topico-btn');
    const conteudos = bloco.querySelectorAll('.conteudo-aula');
    botoes.forEach(btn => {
      btn.addEventListener('click', () => {
        conteudos.forEach(c => c.style.display = 'none');
        bloco.querySelector(`#${btn.dataset.topico}`).style.display = 'block';
      });
    });
  });
}
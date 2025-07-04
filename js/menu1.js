export function setupMenuProjetosDropdown() {
  const menuProjetos = document.querySelector('.menu-projetos');
  if (!menuProjetos) return;

  let isTouch = false;

  // Detecta se é touch
  window.addEventListener('touchstart', function onFirstTouch() {
    isTouch = true;
    window.removeEventListener('touchstart', onFirstTouch, false);
  }, false);

  // Hover para desktop
  menuProjetos.addEventListener('mouseenter', function() {
    if (!isTouch) menuProjetos.classList.add('ativo');
  });
  menuProjetos.addEventListener('mouseleave', function() {
    if (!isTouch) menuProjetos.classList.remove('ativo');
  });

  // Clique para mobile/touch
  menuProjetos.addEventListener('click', function(e) {
    if (isTouch && e.target.closest('.menu-projetos > a')) {
      e.preventDefault();
      menuProjetos.classList.toggle('ativo');
    }
  });

  // Fecha ao clicar fora (mobile)
  document.addEventListener('click', function(e) {
    if (isTouch && !menuProjetos.contains(e.target)) {
      menuProjetos.classList.remove('ativo');
    }
  });
}
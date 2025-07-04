


// ...existing code...
export function setupAccordion() {
    const toggle = document.getElementById('toggleSobreMim');
    const conteudo = document.getElementById('sobreMimConteudo');
    const titulo = toggle.closest('.titulo');
    if (toggle && conteudo && titulo) {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            conteudo.classList.toggle('ativo');
            if (conteudo.classList.contains('ativo')) {
                titulo.classList.add('sem-radius');
            } else {
                titulo.classList.remove('sem-radius');
            }
        });
    }
}
// ...existing code...
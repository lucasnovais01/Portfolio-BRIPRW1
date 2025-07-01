export function setupAulasTabs() {
    const variaveisBtn = document.getElementById("variaveisBtn");
    const variavelSection = document.getElementById("variavelSection");

    if (variaveisBtn && variavelSection) {
        variaveisBtn.addEventListener("click", function() {
            variavelSection.style.display = "block";
        });
        // Mostra por padrão
        variavelSection.style.display = "block";
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const verificarButton = document.getElementById('verificar');
    const tela1 = document.getElementById('tela1');
    const tela2 = document.getElementById('tela2');
    const scratchCard = document.getElementById('scratch');

    verificarButton.addEventListener('click', () => {
        const digito1 = document.getElementById('digito1').value;
        const digito2 = document.getElementById('digito2').value;
        const digito3 = document.getElementById('digito3').value;
        const digito4 = document.getElementById('digito4').value;
        
        if (digito1 === '0' && digito2 === '4' && digito3 === '2' && digito4 === '0') {
            // Animação de abertura
            tela1.style.opacity = '0';
            tela1.style.transform = 'scale(0.9)';
            setTimeout(() => {
                tela1.style.display = 'none';
                tela2.style.display = 'flex';
                tela2.style.opacity = '1';
                tela2.style.transform = 'scale(1)';
            }, 500);  // Tempo da animação
        } else {
            alert('Combinação incorreta. Tente novamente!');
        }
    });

    // Efeito de raspadinha (revela a imagem ao interagir)
    scratchCard.addEventListener('mouseover', () => {
        const overlay = scratchCard.querySelector('.overlay');
        overlay.style.opacity = '0';  // Revela ao passar o mouse
    });

    scratchCard.addEventListener('mouseout', () => {
        const overlay = scratchCard.querySelector('.overlay');
        overlay.style.opacity = '1';  // Oculta novamente
    });

    // Para mobile: Use touch events
    scratchCard.addEventListener('touchstart', () => {
        const overlay = scratchCard.querySelector('.overlay');
        overlay.style.opacity = '0';
    });
});

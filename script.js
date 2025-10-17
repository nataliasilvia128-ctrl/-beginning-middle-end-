document.addEventListener('DOMContentLoaded', () => {
    const verificarButton = document.getElementById('verificar');
    const tela1 = document.getElementById('tela1');
    const tela2 = document.getElementById('tela2');
    const scratchCard = document.getElementById('scratch');
    const overlay = document.querySelector('#scratch .overlay');

    verificarButton.addEventListener('click', () => {
        const digito1 = document.getElementById('digito1').value;
        const digito2 = document.getElementById('digito2').value;
        const digito3 = document.getElementById('digito3').value;
        const digito4 = document.getElementById('digito4').value;
        
        if (digito1 === '0' && digito2 === '4' && digito3 === '2' && digito4 === '0') {
            tela1.style.opacity = '0';
            tela1.style.transform = 'scale(0.9)';
            setTimeout(() => {
                tela1.style.display = 'none';
                tela2.style.display = 'flex';
                tela2.style.opacity = '1';
                tela2.style.transform = 'scale(1)';
            }, 500);
        } else {
            alert('Combinação incorreta. Tente novamente!');
        }
    });

    // Efeito de raspadinha: Revela ao arrastar
    let isDragging = false;
    scratchCard.addEventListener('mousedown', () => { isDragging = true; });
    scratchCard.addEventListener('mousemove', (e) => {
        if (isDragging) {
            const rect = scratchCard.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            // Simula desgaste: Reduz opacidade gradualmente (exemplo simples)
            overlay.style.opacity = '0';  // Revela completamente ao arrastar
        }
    });
    scratchCard.addEventListener('mouseup', () => { isDragging = false; });
    scratchCard.addEventListener('mouseleave', () => { isDragging = false; });

    // Para mobile: Suporte a touch
    scratchCard.addEventListener('touchstart', () => { isDragging = true; });
    scratchCard.addEventListener('touchmove', (e) => {
        if (isDragging) {
            const rect = scratchCard.getBoundingClientRect();
            const touch = e.touches[0];
            const x = touch.clientX - rect.left;
            const y = touch.clientY - rect.top;
            overlay.style.opacity = '0';  // Revela ao tocar e mover
        }
    });
    scratchCard.addEventListener('touchend', () => { isDragging = false; });
});

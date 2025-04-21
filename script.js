document.addEventListener("DOMContentLoaded", function() {
    const tradeButtons = document.querySelectorAll('.trade-button');

    tradeButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Trading functionality coming soon!');
        });
    });

    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('click', () => {
        window.location.href = '#trade';
    });
});
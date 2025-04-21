document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.cta-button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Button clicked! This can be linked to trading functionality.');
        });
    });
});

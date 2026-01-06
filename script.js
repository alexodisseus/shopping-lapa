// Animações de entrada
document.addEventListener('DOMContentLoaded', () => {
    // Animação do título
    const heroTitle = document.querySelector('.hero-title');
    heroTitle.style.opacity = '0';
    heroTitle.style.transform = 'translateY(30px)';
    
    setTimeout(() => {
        heroTitle.style.transition = 'all 0.8s ease';
        heroTitle.style.opacity = '1';
        heroTitle.style.transform = 'translateY(0)';
    }, 100);

    // Animação do card de progresso
    const progressCard = document.querySelector('.floating-card');
    progressCard.style.opacity = '0';
    progressCard.style.transform = 'scale(0.9)';
    
    setTimeout(() => {
        progressCard.style.transition = 'all 0.6s ease';
        progressCard.style.opacity = '1';
        progressCard.style.transform = 'scale(1)';
    }, 300);

    // Animação da barra de progresso
    const progressFill = document.querySelector('.progress-fill');
    const targetWidth = progressFill.style.width;
    progressFill.style.width = '0%';
    
    setTimeout(() => {
        progressFill.style.transition = 'width 1.5s ease';
        progressFill.style.width = targetWidth;
    }, 600);

    // Efeito hover nos botões
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0)';
        });
    });

    console.log('Apresentação carregada com sucesso!');
});
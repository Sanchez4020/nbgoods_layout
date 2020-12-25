document.addEventListener('DOMContentLoaded', () => {
    const
        authBlock = document.querySelector('.auth-page__content'),
        switcher = authBlock.querySelector('.auth-page__switcher');

    switcher.addEventListener('click', () => {
        authBlock.classList.toggle('login');
        switcher.classList.toggle('active');
    });
})
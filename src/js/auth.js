document.addEventListener('DOMContentLoaded', () => {
    const
        authBlock = document.querySelector('.auth-page__content'),
        switcher = authBlock.querySelector('.auth-page__switcher'),
        loginBtn = switcher.querySelector('.login-btn'),
        signInBtn = switcher.querySelector('.sign-in-btn');

    loginBtn.addEventListener('click', () => {
        authBlock.classList.add('login');
        switcher.classList.remove('active');
    });

    signInBtn.addEventListener('click', () => {
        authBlock.classList.remove('login');
        switcher.classList.add('active');
    });
})
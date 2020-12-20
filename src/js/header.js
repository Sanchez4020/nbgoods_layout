document.addEventListener('DOMContentLoaded', () => {
   const
        categories = document.querySelector('.header__categories'),
        links = categories.querySelectorAll('.header__link'),
        closeBtn = categories.querySelector('.close-btn');

   links.forEach(link => link.addEventListener('click', () => categories.classList.add('show-submenu')));
   closeBtn.addEventListener('click', () => categories.classList.remove('show-submenu'));
});
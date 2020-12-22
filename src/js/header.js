document.addEventListener('DOMContentLoaded', () => {
   const
         categories = document.querySelector('.header__categories'),
         links = categories.querySelectorAll('.header__link'),
         closeBtn = categories.querySelector('.close-btn'),
         removeActiveClass = () => {
            links.forEach(link => link.classList.remove('active'));
         };

   links.forEach(link => link.addEventListener('click', () => {
      removeActiveClass();
      link.classList.add('active');
      categories.classList.add('show-submenu');
   }));
   closeBtn.addEventListener('click', () => {
      categories.classList.remove('show-submenu');
      removeActiveClass();
   });
});
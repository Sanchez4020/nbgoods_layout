;document.addEventListener('DOMContentLoaded', () => {
    const
        tabs = document.querySelectorAll('.account__tabs-item'),
        content = document.querySelectorAll('.account__main');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetClass = tab.getAttribute('data-tab');
            tabs.forEach(tab => tab.classList.remove('active'));
            tab.classList.add('active');
            content.forEach(elem => {
                if(elem.classList.contains(targetClass)){
                    elem.style.display = 'flex';
                } else {
                    elem.style.display = 'none';
                }
            })
        })
    })
})
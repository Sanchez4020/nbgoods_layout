document.addEventListener('DOMContentLoaded', () => {
    const
        filter = document.querySelector('.filter'),
        filterOpenBtn = document.querySelector('._js-filter-open'),
        filterCloseBtn = document.querySelector('._js-filter-close'),
        isInited = () => document.documentElement.clientWidth < 1001 ? true : false;

    filterOpenBtn.addEventListener('click', () => {
        if (isInited()) {
            filter.classList.add('active');
        } else return;
    })

    filterCloseBtn.addEventListener('click', () => {
        if (isInited()) {
            filter.classList.remove('active')
        } else return;
    })
})
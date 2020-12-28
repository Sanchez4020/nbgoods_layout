document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('.input--password');
    inputs.forEach(input => {
        const
            inputItem = input.querySelector('input'),
            inputIcon = input.querySelector('.input__icon');
        inputIcon.addEventListener('click', ()=> {
            input.classList.toggle('show-password');
            inputItem.type = inputItem.type === 'password' ? 'text': 'password';
        })
    });

    const checkboxes = document.querySelectorAll('.checkbox');
    checkboxes.forEach(elem => {
        const
            label = elem.querySelector('label'),
            input = elem.querySelector('input');
        label.addEventListener('click', () =>{
            label.classList.toggle('checked');
            console.log(input.checked);
        })
    });

    const initRadio = (name) => {
        const radioButtons = document.querySelectorAll('._js-'+name);
        radioButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                radioButtons.forEach(btn => btn.querySelector('div').classList.remove('checked'));
                btn.querySelector('div').classList.add('checked');
            })
        })
    };

    initRadio('test-color');
    initRadio('test-size');
    initRadio('filter-color');
    initRadio('filter-size');

    const
            customNav = document.querySelectorAll('.custom-navigation'),
            customNavFunc = (nav) => {
                const items = nav.querySelectorAll('.custom-navigation__item');
                items.forEach(item => {
                    item.addEventListener('click', () => {
                        if (item.classList.contains('active')) {
                            return;
                        } else {
                            items.forEach(item => item.classList.remove('active'));
                            item.classList.add('active');
                        }
                    })
                })
            };
    if (customNav) {
        customNav.forEach(nav => customNavFunc(nav));
    }

    const customScrollElements = document.querySelectorAll('.js-custom-scrollbar');

    customScrollElements.forEach(elem => {
            OverlayScrollbars(elem, {
                overflowBehavior: {
                    x: 'hidden',
                    y: 'scroll'
                },
                scrollbars: {
                    autoHide: "never"
                }
            })
        }
    )

    $('.paginator').pagination({
        items: 20,
        itemsOnPage: 1,
        prevText: '<',
        nextText: '>',
        edges: 1,
        displayedPages: 3,
    })
});

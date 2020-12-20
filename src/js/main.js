document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('.input--password');
    inputs.forEach(input => {
        const
            inputItem = input.querySelector('input'),
            inputIcon = input.querySelector('.input__icon');
        inputIcon.addEventListener('click', ()=> {
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
});

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
    })
});

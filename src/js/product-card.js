document.addEventListener('DOMContentLoaded', () => {

    initDefaultSlider('.product-card__sec-content--might-like', '.prev-arrow--might-like', '.next-arrow--might-like');
    initDefaultSlider('.product-card__sec-content--recently-watched', '.prev-arrow--recently-watched', '.next-arrow--recently-watched');
    initDefaultSlider('.product-card__sec-content--similar', '.prev-arrow--similar', '.next-arrow--similar');

    const
        productItem = document.querySelector('.product-card__item'),
        mainImage = productItem.querySelector('.product-card__item-photo'),
        navImages = productItem.querySelectorAll('.product-card__item-btn');

    navImages.forEach(item => {
        item.addEventListener('click', () => {
            const imageSrc = item.getAttribute('src');
            mainImage.setAttribute('src', imageSrc);
        })
    })

});
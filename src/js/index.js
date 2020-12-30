 document.addEventListener('DOMContentLoaded', () => {
     $('.index__sec-content--brands').slick({
         infinite: true,
         slidesToShow: 6,
         slidesToScroll: 1,
         autoplay: true,
         autoplaySpeed: 2000,
         prevArrow: $('.prev-arrow--brand'),
         nextArrow: $('.next-arrow--brand'),
         responsive: [
             {
                 breakpoint: 1440,
                 settings: {
                     slidesToShow: 5
                 }
             },
             {
                 breakpoint: 1200,
                 settings: {
                     slidesToShow: 4
                 }
             },
             {
                 breakpoint: 960,
                 settings: {
                     slidesToShow: 3
                 }
             },
             {
                 breakpoint: 720,
                 settings: {
                     slidesToShow: 2
                 }
             },
             {
                 breakpoint: 480,
                 settings: {
                     slidesToShow: 1
                 }
             }
         ]
     });

     initDefaultSlider('.index__sec-content--products', '.prev-arrow--new','.next-arrow--new');
     initDefaultSlider('.index__sec-content--offers', '.prev-arrow--offer', '.next-arrow--offer');
 })
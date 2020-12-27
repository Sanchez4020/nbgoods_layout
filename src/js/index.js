 document.addEventListener('DOMContentLoaded', () => {
     $('.index__sec-content--brands').slick({
         infinite: true,
         slidesToShow: 6,
         slidesToScroll: 1,
         arrows: false,
         autoplay: true,
         autoplaySpeed: 2000,
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

     $('.index__sec-content--products').slick({
         infinite: true,
         slidesToShow: 4,
         slidesToScroll: 4,
         arrows: false,
         autoplay: true,
         autoplaySpeed: 2000,
         responsive: [
             {
                 breakpoint: 1440,
                 settings: {
                     slidesToShow: 3,
                     slidesToScroll: 3
                 }
             },
             {
                 breakpoint: 1080,
                 settings: {
                     slidesToShow: 2,
                     slidesToScroll: 2
                 }
             },
             {
                 breakpoint: 720,
                 settings: {
                     slidesToShow: 1,
                     slidesToScroll: 1
                 }
             },
         ]
     })
 })
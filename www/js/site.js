$(document).ready(function() {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 4,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
});


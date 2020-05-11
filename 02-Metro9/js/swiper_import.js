$(function () {
    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        slidesPerView: 2,
        spaceBetween: 10,
        centeredSlides: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction'
        }
    });
});

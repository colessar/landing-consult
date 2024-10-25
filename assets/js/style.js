$(document).ready(function () {
    var galleryBrand = new Swiper('.gallery-brand', {
        spaceBetween: 0,
        slidesPerView: 3,
        //centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        speed: 20000,
        allowTouchMove: false,
    });
    $('#hamburgerMenu').click(function(){
        
        $(this).toggleClass('open');
        $('.bar1').toggleClass('rotate-45 translate-y-[8px]');
        $('.bar2').toggleClass('opacity-0');
        $('.bar3').toggleClass('-rotate-45 -translate-y-[8px]');
    });
})
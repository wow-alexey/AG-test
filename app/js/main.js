$('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slider-nav',
    prevArrow:'<button type="button" class="slick-prev"><img src="../app/img/left-arrow.svg" style="width: 40px; height: 40px;" alt="left-arrow"></button>',
    nextArrow:'<button type="button" class="slick-next"><img src="../app/img/right-arrow.svg" style="width: 40px; height: 40px;" alt="right-arrow"></button>',
});
$('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider',
    leftMode: true,
    arrows: true,
    focusOnSelect: true,
    prevArrow:'<button type="button" class="navigation slick-prev"><img src="../app/img/left-nav.svg" style="width: 8px; height: 15px;" alt="left-arrow"></button>',
    nextArrow:'<button type="button" class="navigation slick-next"><img src="../app/img/right-nav.svg" style="width: 8px; height: 15px;" alt="right-arrow"></button>',
});
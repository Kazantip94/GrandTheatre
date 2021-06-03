$(document).ready(function(){
    $('.header__slider').slick({
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: false,
        // centerMode: true
    });
    $('.partners__slider').slick({
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 2,
        draggable: true,
        rows: 2
    });
});
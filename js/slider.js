$(document).ready(function(){
    $('.header__slider').slick({
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        
    });
    $('.partners__slider').slick({
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 2,
        draggable: true,
        rows: 2
    });
    $('.staging__slider').slick({
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 2,
        draggable: true,
        variableWidth: true,
        waitForAnimate: true,
        touchThreshold: 10
    });
});
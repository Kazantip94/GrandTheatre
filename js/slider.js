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
        slidesToScroll: 1,
        draggable: true,
        rows: 2,
        responsive: [
          {
            breakpoint: 1400,
            settings: {
              arrows: false,
              rows: 2,
              centerMode: false,
              slidesToShow: 3
            }
          },
            {
              breakpoint: 1100,
              settings: {
                arrows: false,
                rows: 2,
                centerMode: true,
                slidesToShow: 2
              }
            },
            {
              breakpoint: 767,
              settings: {
                arrows: false,
                centerMode: false,
                slidesToShow: 2
              }
            },
            {
              breakpoint: 556,
              settings: {
                arrows: false,
                centerMode: false,
                slidesToShow: 1
              }
            }
          ]
    });
    $('.staging__slider').slick({
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        draggable: true,
        variableWidth: true,
        waitForAnimate: true,
    });
});
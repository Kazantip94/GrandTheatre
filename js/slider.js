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
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
              }
            }
          ]
    });
    $('.staging__slider').slick({
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 2,
        draggable: true,
        variableWidth: true,
        waitForAnimate: true,
        touchThreshold: 10,
        // responsive: [
        //   {
        //     breakpoint: 1400,
        //     settings: {
        //       arrows: false,
        //       centerMode: true,
        //       variableWidth: false,
        //       slidesToShow: 3
        //     }
        //   },
        //   {
        //     breakpoint: 480,
        //     settings: {
        //       arrows: false,
        //       centerMode: true,
        //       centerPadding: '40px',
        //       slidesToShow: 1
        //     }
        //   }
        // ]
    });
});
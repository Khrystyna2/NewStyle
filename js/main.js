$(document).ready(function() {

    $('.menu__item>span').click(function() {
        $(this).next('ul').slideToggle();
        $(this).closest('li').siblings('li').find('ul').slideUp();        
    });

    $('.slider-header').slick({
        // autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true
      });
});

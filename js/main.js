$(document).ready(function () {

    $('.menu__item>span').click(function () {
        $(this).next('ul').slideToggle();
        $(this).closest('li').siblings('li').find('ul').slideUp();
    });


    $(function () {
        $('.slider-header').on('init', function (event, slick) {
            $(this).append('<div class="slick-counter"><span class="current"></span><span class="total"></span></div>');
            let findBlock = $(this).find('.total');
            let findCurrentBlock = $(this).find('.current');
            findCurrentBlock.text('0' + (slick.currentSlide + 1));
            if (slick.slideCount < 10) {
                findBlock.text('0' + slick.slideCount);          
            } else {
                findBlock.text(slick.slideCount);
            }

        })
        .slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            // autoplay: true,
            dots: true,
            arrows: false,
            autoplaySpeed: 2000,
            focusOnSelect: false,
            speed: 1000
        })
        .on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            // console.log(nextSlide);
            let indexNextSlider = nextSlide + 1;
            let findCurrentBlock = $(this).find('.current');
            if (indexNextSlider <= 9) {
                findCurrentBlock.text('0' + (nextSlide + 1));    
            } 
            else {
                findCurrentBlock.text(nextSlide + 1);            
            }
        });


    });

    $("#search").on("focus", function() {
        $("#search").val("");
    });

     // tabs start
     $('#nav-tabs').each(function() {
        $(this).find('li').each(function(i) {
            $(this).attr('data-tab', 'tab' + i);
            $(this).click(function(){
                $(this).addClass('active').siblings().removeClass('active');
            });
        });
    });

    $('#tabs-content').each(function() {
        $(this).find('div.tabs-content__info').each(function(i) {
            $(this).attr('data-tab', 'tab' + i);
        });
    });

    $('.nav-tabs__items').on('click', function() {
        var dataTab = $(this).data('tab');
        var getBlock = $(this).closest('.select-collections');
        getBlock.find('#tabs-content>div[data-tab='+dataTab+']').addClass('active').siblings().removeClass('active');
    });
    // tabs end

    $('.suggestions').each(function() {
        $(this).find('.suggestions__item').each(function(i) {
            $(this).attr('data-img', 'img' + i);
        });
    });
    $('.suggestions').each(function() {
        $(this).find('.suggestions__img>div').each(function(i) {
            $(this).attr('data-img', 'img' + i);
        });
    });

    $('.suggestions__item').hover(function() {
        var dataImg = $(this).data('img');
        var getBlock = $(this).closest('.suggestions');
        getBlock.find('.suggestions__img>div[data-img='+dataImg+']').toggleClass('active');
        $('.suggestions__item').toggleClass('hide');
    });


    $('.additional-suggestions__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.additional-suggestions__nav-slider'
      });
      $('.additional-suggestions__nav-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.additional-suggestions__slider',
        focusOnSelect: true
      });
          


    //   slider-collections

    $(function () {
        $('.slider-collection').on('init', function (event, slick) {
            $(this).append('<div class="slick-counter"><span class="current"></span><span class="total"></span></div>');
            let findBlock = $(this).find('.total');
            let findCurrentBlock = $(this).find('.current');

            findCurrentBlock.text('0' + (slick.currentSlide + 2));
            if (slick.slideCount < 5) {
                findBlock.text('0' + slick.slideCount * 2); 
            } else {
                findBlock.text(slick.slideCount * 2);
            }

        })
        .slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            // autoplay: true,
            dots: false,
            arrows: true,
            autoplaySpeed: 2000
        })
        .on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            let findCurrentBlock = $(this).find('.current');
            let indexNextSlider = nextSlide + 1;
            if (indexNextSlider < 5) {
                findCurrentBlock.text('0' + (indexNextSlider * 2));    
            } 
            else {
                findCurrentBlock.text(indexNextSlider * 2);            
            }
        });

    });

    // slider video
    $(function () {
        $('.slider-video').on('init', function (event, slick) {
            $(this).append('<div class="slick-counter"><span class="current"></span><span class="total"></span></div>');
            let findBlock = $(this).find('.total');
            let findCurrentBlock = $(this).find('.current');
            findCurrentBlock.text('0' + (slick.currentSlide + 1));
            if (slick.slideCount < 10) {
                findBlock.text('0' + slick.slideCount); 
            
            } else {
                findBlock.text(slick.slideCount);
            }
        })
        .slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            arrows: true,
            autoplaySpeed: 2000,
            focusOnSelect: false,
            speed: 1000
        })
        .on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            let indexNextSlider = nextSlide + 1;
            let findCurrentBlock = $(this).find('.current');
            if (indexNextSlider <= 9) {
                findCurrentBlock.text('0' + indexNextSlider);    
            } 
            else {
                findCurrentBlock.text(indexNextSlider);            
            }
        });
    });
});

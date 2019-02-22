// google map
function initMap() {

    let lat1 = 46.6752621, lng1 = 32.5915763;
    map = new google.maps.Map(document.getElementById("map"), {
        center: {
            lat: lat1, lng: lng1
        }
        , zoom: 17, mapTypeId: "roadmap", panControl: !1, zoomControl: !1, scaleControl: !1, disableDefaultUI: !0, styles: [
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#d0cfcf"
                    },
                    {
                        "lightness": 17
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f7f7f7"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 17
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 29
                    },
                    {
                        "weight": 0.2
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 18
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e3e3e3"
                    },
                    {
                        "lightness": 21
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e3e3e3"
                    },
                    {
                        "lightness": 21
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "saturation": 36
                    },
                    {
                        "color": "#333333"
                    },
                    {
                        "lightness": 40
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f2f2f2"
                    },
                    {
                        "lightness": 19
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#fefefe"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#fefefe"
                    },
                    {
                        "lightness": 17
                    },
                    {
                        "weight": 1.2
                    }
                ]
            }
        ]
    }
    )
    var icons = {
        info: {
            icon: 'icons/location-big.svg',
        }
    };

    var features = [
        {
            position: new google.maps.LatLng(lat1, lng1),
            type: 'info'
        }
    ];
    // Create markers.
    features.forEach(function (feature) {
        var marker = new google.maps.Marker({
            position: feature.position,
            icon: icons[feature.type].icon,
            map: map
        });
    });
}
//google map end

$(document).ready(function () {

    //fixed menu
    let heightHeader = $('.header').height();
    $(window).scroll(function () {
        if ($(window).scrollTop() >= heightHeader) {
            $('.header').addClass('sticky');
            $('.header-menu').css('padding-top', '6px');
            $('main').css('padding-top', heightHeader);
        } else {
            $('.header').removeClass('sticky');
            $('.header-menu').css('padding-top', '2.3rem');
            $('main').css('padding-top', "0");
        }
    });

    // menu
    $('.menu__item>span').click(function () {
        $(this).next('.menu__item_subMenu').slideToggle();
        $(this).closest('li').siblings('li').find('ul').slideUp();
    });

    $(document.body).click(function (e) {
        $('.menu__item>span').next('.menu__item_subMenu').slideUp();
    });

    $(".menu__item>span, .menu__item_subMenu").click(function (e) {
        e.stopPropagation();
    });

    $('.language>li>a').click(function () {
        $(this).next('ul').slideToggle();
    });

    // slider first screen
    $(function () {
        $('.slider-first-screen').on('init', function (event, slick) {
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
                autoplay: true,
                dots: true,
                arrows: false,
                autoplaySpeed: 2000,
                focusOnSelect: false,
                slide: ".slider-first-screen__item",
                speed: 1000,
                responsive: [
                    {
                        breakpoint: 992,
                        settings: {
                            dots: false
                        }
                    }
                ]
            })
            .on('beforeChange', function (event, slick, currentSlide, nextSlide) {
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

    // cleans input
    $("#search").on("focus", function () {
        $("#search").val("");
    });

    $(".blog__search>input").on("focus", function () {
        $(".blog__search>input").val("");
    });

    // tabs start
    $('#nav-tabs').each(function () {
        $(this).find('li').each(function (i) {
            $(this).attr('data-tab', 'tab' + i);
            $(this).click(function () {
                $(this).addClass('active').siblings().removeClass('active');
            });
        });
    });

    $('#tabs-content').each(function () {
        $(this).find('div.tabs-content__info').each(function (i) {
            $(this).attr('data-tab', 'tab' + i);
        });
    });

    $('.nav-tabs__items').on('click', function () {
        var dataTab = $(this).data('tab');
        var getBlock = $(this).closest('.select-collections, .region');
        getBlock.find('#tabs-content>div[data-tab=' + dataTab + ']').addClass('active').siblings().removeClass('active');
    });
    // tabs end

    $('.suggestions').each(function () {
        $(this).find('.suggestions__item').each(function (i) {
            $(this).attr('data-img', 'img' + i);
        });
        $(this).find('.suggestions__img>div').each(function (i) {
            $(this).attr('data-img', 'img' + i);
        });
    });

    $('.suggestions__item').hover(function () {
        var dataImg = $(this).data('img');
        var getBlock = $(this).closest('.suggestions');
        getBlock.find('.suggestions__img>div[data-img=' + dataImg + ']').toggleClass('active');
        $('.suggestions__item').toggleClass('hide');
    });

    // slider additional-suggestions
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

    // slider-collections
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
                autoplay: true,
                dots: false,
                arrows: true,
                slide: ".slider-collection__item",
                autoplaySpeed: 2000,
                responsive: [
                    {
                        breakpoint: 568,
                        settings: {
                            arrows: false
                        }
                    }
                ]
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
                arrows: true,
                autoplaySpeed: 2000,
                focusOnSelect: false,
                slide: ".slider-video__item",
                speed: 1000,
                responsive: [
                    {
                        breakpoint: 568,
                        settings: {
                            arrows: false
                        }
                    }
                ]
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

    //mobil menu header
    $('.menu-btn').click(function () {
        $('.mobile-screen').toggleClass('open');
        $('.header').toggleClass('bg-white');
        $('body').toggleClass('overflow');
    });

    $('.btn-select-collections').click(function () {
        $('.nav-tabs').slideToggle();
    });

    //mobile menu footer
    $('.footer-menu__title').click(function () {
        $(this).next('ul').slideToggle();
        $(this).closest('li').siblings('li').find('ul').slideUp();
    });

    // slider on mobile screen
    function slideDetect() {
        $('.info-box, .partners__box').not('.slick-initialized').slick({
            dots: false,
            arrows: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [{
                breakpoint: 99999,
                settings: "unslick"
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
            }
            ]
        });
    }

    slideDetect();

    $(window).resize(function () {
        if ($(window).width() > 550) {
            $('.info-box, .partners__box').slick('unslick');
        }
        else if ($(window).width() <= 550) {
            slideDetect()
        }
    });

    // slider image
    $(function () {
        $('.slider-image').on('init', function (event, slick) {
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
                // autoplay: true,
                arrows: true,
                autoplaySpeed: 2000,
                focusOnSelect: false,
                slide: ".slider-image__item",
                responsive: [
                    {
                        breakpoint: 568,
                        settings: {
                            arrows: false
                        }
                    }
                ]
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

    //filter catalog
    $('.filter__item>.filter__title').click(function () {
        $(this).next('ul').slideToggle();
        $(this).toggleClass('rotate');
    });

    if ($(window).width() <= 768) {
        $('.filter__item>.filter__title').next('ul').slideUp();
        $('.filter__item>.filter__title').removeClass('rotate');
    }

    // style select
    $(function () {
        $('select').styler();
    });

    // sort button
    $('.catalog__sort-btn').click(function () {
        $(this).addClass('active');
        $(this).closest('.catalog__sort-btn').siblings().removeClass('active');
    });

    $('#sortGrid').click(function () {
        $('.cards').removeClass('sortRow');
    });
    $('#sortRow').click(function () {
        $('.cards').addClass('sortRow');
    });

    $(window).resize(function () {
        if ($(window).width() <= 567.8) {
            $('.cards').removeClass('sortRow');
        }
    });

    // slider open model
    $('.model-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.model-slider-nav'
    });
    $('.model-slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.model-slider',
        focusOnSelect: true,
        arrows: false
    });

    // slider other-models__examples
    $('.other-models__examples').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 568,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });


    // second menu drop down
    $('.second-menu__btn>span').click(function () {
        $(this).next('.second-menu__dropdown').slideToggle();
    });

    $(document.body).click(function (e) {
        $('.second-menu__btn>span').next('.second-menu__dropdown').slideUp();;
    });

    $(".second-menu__btn>span, .second-menu__dropdown").click(function (e) {
        e.stopPropagation();
    });


    // input type file
    $('#send-resume').change(function () {
        var numfiles = $(this)[0].files.length;
        var parent = $(this).closest('.send-resume');
        parent.find('small').remove();
        for (i = 0; i < numfiles; i++) {
            parent.append('<small>' + $(this)[0].files[i].name + '</small>')
        }
    });

    // counter number
    if ($(".info").length === 1) {
        let a = 0;
        $(window).scroll(function () {
            let offsetTop = $('.info').offset().top - window.innerHeight;
            console.log('scroll', offsetTop);
            if (a == 0 && $(window).scrollTop() > offsetTop) {
                $('.counter-value').css('opacity', '1');
                $('.counter-value').each(function () {
                    $(this).prop('Counter', 0).animate({
                        Counter: $(this).text()
                    }, {
                            duration: 3000,
                            easing: 'swing',
                            step: function (now) {
                                $(this).text(Math.ceil(now));
                            }
                        });
                });
                a = 1;
            }
        });
    }

});

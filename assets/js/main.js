/*global jQuery*/
jQuery(document).ready(function ($) {
    'use strict';

    //====== MAIN MENU ===============
    $('#menu').slicknav({
        label: '',
        brand: ''

    });
    $('.slicknav_menu').prepend('<a href="index.html"><img class="logo" src="assets/img/logo.png" alt="Website Logo" /></a>');

    //====== HEAD ROOM JS ACTIVE ===============
    $(".back-to-top").headroom();

    //====== SCROLL ACTIVE ===============
    $('html').smoothScroll(500);

    //====== HOME PAGE SLIDER ===============
    var homepageSlides = $(".home-pege-slide");
    homepageSlides.owlCarousel({
        loop: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });


    //====== OWL EVENT ANIMATION ===============
    homepageSlides.on('translated.owl.carousel', function (event) {
        $(".hero-content h3").addClass("animated bounceIn");
        $(".hero-content h1").addClass("animated zoomIn");
        $(".hero-content h4").addClass("animated zoomIn");
    });
    homepageSlides.on('translate.owl.carousel', function (event) {
        $(".hero-content h3").removeClass("animated bounceIn");
        $(".hero-content h1").removeClass("animated zoomIn");
        $(".hero-content h4").removeClass("animated zoomIn");
    });


    //======   RECENT WORK ISOTOP ACTIVE ===============
    $('.protfolio-filter li').on('click', function () {
        var filterData = $(this).attr("data-filter");


        $(".protfolio-list").isotope({
            filter: filterData,
        });

        $(".protfolio-filter li").removeClass('active');
        $(this).addClass('active');
    });

    $(".protfolio-list").isotope({
        // options
        itemSelector: '.single-protfolio-list-inner',
        percentPosition: true,
        masonry: {
            columnWidth: '.single-protfolio-list-inner',
            horizontalOrder: true,
        }
    });

    //====== TESTIMONIAL CARUSAL ACTIVE ===============
    $('.testimonial-wrapper').owlCarousel({
        loop: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    //====== COUNTER AREA =======================
    $('.count').counterUp({
        delay: '.9',
        time: 100
    });
    //====== CLIENT LOGO CARUSAL ===============
    $('.logo-wrapper').owlCarousel({
        loop: true,
        nav: true,
        autoplay: true,
        navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });

    // ===== SCROLL TO TOP ===============
    var btn = $('#button-b-t');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '300');
    });



});

$(function(){
    $('.rate-star').rateYo({
        rating: 5,
        starWidth: "13px",
        spacing: "5px",
        readOnly: true
    });

    $('.featured__inner-box').slick({
        dots: false,
        prevArrow: $('.featured__arrow-left'),
        nextArrow: $('.featured__arrow-right')
    });

    $('.feed__box').slick({
        dots: false,
        slidesToShow: 3,
        prevArrow: $('.feed__arrow-left'),
        nextArrow: $('.feed__arrow-right'),
        variableWidth: true
    });

    $(".js-range-slider").ionRangeSlider({
        from: 30,
        to: 300,
        type: "double",
        prefix: "$"
    });

    $('.icon-list').on('click', function(){
        $('.product-page__item').addClass('list');
        $('.icon-list').addClass('active');
        $('.icon-grid').removeClass('active')
    });

    $('.icon-grid').on('click', function(){
        $('.product-page__item').removeClass('list');
        $('.icon-grid').addClass('active');
        $('.icon-list').removeClass('active')
    });

    $(".menu__btn").on('click', function(){
        $('.menu__list').slideToggle();
    });

    $('.user__btn').on('click', function(){
        $('.user__box').toggleClass('active');
    });

    let mixer = mixitup('.products__box');

   
});
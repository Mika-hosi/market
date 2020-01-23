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
        nextArrow: $('.feed__arrow-right')
    });

    let mixer = mixitup('.products__box');

   
});
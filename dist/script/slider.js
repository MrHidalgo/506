var slider = {
    $: {
        next: '.slider__btn-wrap .slider__btn-right',
        prev: '.slider__btn-wrap .slider__btn-left'
    },
    init: function () {
        this.mainSlider();
    },
    mainSlider: function() {
        var wrapper = '.slider__container';
        if (!wrapper.length) {
            return;
        } else {
            $(wrapper).slick({
                // autoplay: true,
                // infinite: true,
                cssEase: 'ease-in-out',
                speed: 250,
                slidesToShow: 1,
                slidesToScroll: 1,
                draggable: true,
                arrows: true,
                dots: false,
                nextArrow: slider.$.next,
                prevArrow: slider.$.prev
            });
        }
    }
};

$(document).ready( function() {
    $(".slider").css({
        "opacity" : 1
    });
    slider.init();
});
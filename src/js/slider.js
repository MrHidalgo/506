var slider = {
    $: {
        next: '.slider__btn-wrap .slider__btn-right',
        prev: '.slider__btn-wrap .slider__btn-left',
        nextLike: '.recently__carousel--like .recently__btn_next',
        prevLike: '.recently__carousel--like .recently__btn_prev',
        nextView: '.recently__carousel--view .recently__btn_next',
        prevView: '.recently__carousel--view .recently__btn_prev'
    },
    init: function () {
        this.mainSlider();
        this.recentlyLikeSlider();
        this.recentlyViewSlider();
    },
    mainSlider: function() {
        var wrapper = '.slider__container';
        if (!wrapper.length) {
            return;
        } else {
            $(wrapper).slick({
                autoplay: true,
                slidesToShow: 1,
                nextArrow: slider.$.next,
                prevArrow: slider.$.prev,
                infinite: true,
                cssEase: 'ease-in-out',
                speed: 250,
                slidesToScroll: 1,
                draggable: true,
                arrows: true,
                dots: false
            });
        }
    },
    recentlyLikeSlider: function () {
        var wrapper = '.recently__carousel_like';
        if(!wrapper.length) {
            return;
        } else {
            $(wrapper).slick({
                slidesToShow: 5,
                nextArrow: slider.$.nextLike,
                prevArrow: slider.$.prevLike,
                infinite: true,
                cssEase: 'ease-in-out',
                speed: 250,
                slidesToScroll: 1,
                draggable: true,
                arrows: true,
                dots: false
            });
        }
    },
    recentlyViewSlider: function () {
        var wrapper = '.recently__carousel_view';
        if(!wrapper.length) {
            return;
        } else {
            $(wrapper).slick({
                slidesToShow: 5,
                nextArrow: slider.$.nextView,
                prevArrow: slider.$.prevView,
                infinite: true,
                cssEase: 'ease-in-out',
                speed: 250,
                slidesToScroll: 1,
                draggable: true,
                arrows: true,
                dots: false
            });
        }
    },
};

$(document).ready( function() {
    $(".slider").css({
        "opacity" : 1
    });
    slider.init();
});
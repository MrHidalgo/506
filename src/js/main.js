function less(nWords, className) {

    $(className).each(function(ind, val) {
        var lessText = $(this).text().substring(0, nWords).trim();

        $(this).html(lessText + "... ");
    });
}


function selectInit(selector) {
    if (selector === undefined) {
        var selector = 'select';
    }
    selectReset(selector);
    $(selector).on('change', function () {
        selectReset(this);
    });
}


function selectReset(selector){
    if (selector === undefined) {
        var selector = 'select';
    }
    $(selector).each(function(){
        var valOption = $(this).children('option:selected');
        $(this).prev('span').html(valOption.text());
    });
}


function categoryBtnToggle() {
    $(".btn-category-js").toggleClass("active");
    $(".category__drop").toggleClass("category__drop_show");
}
function categoryBtnRemove() {
    $(".btn-category-js").removeClass("active");
    $(".category__drop").removeClass("category__drop_show");
}


$(".category__row").on("scroll", function(){
    var categoryBtn             = $(".category__btn"),
        categoryWrap            = $(".category__wrap"),
        categoryRowCheckScroll  = $(this).scrollLeft(),
        categoryBtnWidthSum     = 0,
        widthLastBtnInCategory  = categoryBtn.each(function(ind, val){
            categoryBtnWidthSum += $(val).width();
        }),
        categoryRowWidth        = $(this).width(),
        resultDiff              = (categoryBtnWidthSum - categoryRowWidth) - 30;


    if(categoryRowCheckScroll >= (resultDiff - 30)) {
        categoryWrap.addClass("left").removeClass("right");
    } else {
        categoryWrap.removeClass("left").addClass("right");
    }
});


$(window).on("load resize ready scroll", function(){
    var windowWidth = $(window).width();

    if($(window).width() < '768') {
        $(".letter").removeClass("letter__open");

        $(".letter__wrap").removeClass("clearfix");
    }

    var productContainer = $(".row_list > .product");
    if(windowWidth < '768') {
        productContainer.removeClass("product_grid").addClass("product_list");
    } else {
        productContainer.addClass("product_grid").removeClass("product_list");
    }
})


$(document).ready(function(){


    /* CUSTOM SELECT INIT */
    selectInit();
    /* LESS TEXT DESCRIPTION IN */
    less(50, ".product_grid .product__desc");
    less(250, ".product_list .product__desc");
    less(65, ".flash__desc");


    /* BODY CLICK */
    $('body').on('click', function (e) {
        var className = ".currency, .language, .btn-category-js, .category__drop";

        if (!$(e.target).closest(className).length) {
            $(".currency__btn, .language__btn").removeClass("active");
            $(".drop__down").fadeOut(300);
            categoryBtnRemove();
        }

        // for menu mobile
        if($(e.target).hasClass("menu")) {
            $(".btn-menu_js").removeClass("active");
            $("body, html").removeClass("open-menu open-popup");
        }
    });


    /* SEARCH FOCUS */
    $("input[name='search']").focus(function(){
        $(".search__wrap").addClass("focus");
        $(".search").addClass("search__active");
        categoryBtnRemove();
    });
    $("input[name='search']").blur(function(){
        $(".search__wrap").removeClass("focus");
    });
    $(".btn-clear-search-js").on("click", function(){
        $("input[name='search']").val("");
        $(".search__content_empty").stop(true, true).fadeIn(300);
        $(".search__content_full").stop(true, true).fadeOut(300);
    });
    $(".search__cancel").on("click", function(){
        $(".search").removeClass("search__active");
    });
    $(".btn-start-search-js").on("click", function(){
        var inputValue = $(this).closest(".search__wrap").find(".search__input").val();

        if(inputValue.length > 1) {
            $(".search__content_empty").stop(true, true).fadeOut(300);
            $(".search__content_full").stop(true, true).fadeIn(300);
        }
    });


    /* COUPON */
    $(".btn-modal-submit-js").on("click", function(){
       var couponInputValue = $(".modal__input").val();

       if(couponInputValue === "111") {
           $(".modal__enter").hide();
           $(".modal__done").show();
           $(".menu__btn-coupon_info").addClass("show");
           setCookieStore("COUPON", "done");
       } else {
           $(".modal__enter").hide();
           $(".modal__error").show();
       }
    });
    $(".btn-modal-error-js").on("click", function(){
        $(".modal__error").hide();
        $(".modal__enter").show();
    });
    $(".btn-coupon-js").on("click", function(){
        $("body, html").addClass("open-popup");
        if($(window).width() > "767") {
            $(".modal").fadeIn(300);
        }
    });
    $(".modal__close, .btn-modal-done-js").on("click", function(){
        $("body, html").removeClass("open-popup");
        if($(window).width() > "767") {
            $(".modal").fadeOut(300);
        }
    });
    $(".modal__title").on("click", function(){
        $("body, html").removeClass("open-popup");
    });
    var getCookieCoupon = getCookieStore("COUPON");

    if(getCookieCoupon === "done")
        $(".menu__btn-coupon_info").addClass("show");


    /* BTN MENU BURGER */
    $(".btn-menu_js").on("click", function(){
        var bodyHtmlSelection = $("body, html");

        $(this).toggleClass("active");

        if(bodyHtmlSelection.hasClass("open-popup")) {
            bodyHtmlSelection.toggleClass("open-menu open-popup");
        } else {
            bodyHtmlSelection.toggleClass("open-menu");
        }

        categoryBtnRemove();
    });


    /* LETTER */
    $(".letter__wrap").not(".letter__row").on("click", function(){
        var windowWidth = $(window).width();

        if(windowWidth > "767" && windowWidth < "992") {
            $(".letter").toggleClass("letter__open");

            $(".letter__wrap").toggleClass("clearfix");
            $(".search__content").toggleClass("search__content_letter")
        } else if (windowWidth < "768") {
            $("body, html").addClass("fixed-body");
            $(".slide__letter").toggleClass("slide__letter_active");
        }
    });
    $(".slide__letter-back").on("click", function(){
        $("body, html").removeClass("fixed-body");
        $(".slide__letter").removeClass("slide__letter_active");
    });


    /* CATEGORY */
    $(".btn-category-js, .category__drop").on("click", function () {
        if($(".btn-category-js").hasClass("active")) {
            categoryBtnToggle();
        } else {
            categoryBtnToggle();
        }
    });


    /* TABS */
    $(".tabs__btn").on("click", function(){
        var tabsBtnAttr = $(this).attr("data-tabs");

        $(".tabs__btn").removeClass("active");
        $(this).addClass("active");

        $(".product__tabs").hide();
        $(".product__tabs-" + tabsBtnAttr).show();
    });


    /* LANGUAGE / CURRENCY */
    $(".currency__btn, .language__btn").on("click", function() {
        var thisBtn         = $(this),
            dropDownBlock   = thisBtn.siblings(".drop__down");

        if(thisBtn.hasClass("active")) {
            thisBtn.removeClass("active");
            dropDownBlock.fadeOut(300);
        } else {
            $(".currency__btn, .language__btn").removeClass("active");
            $(".drop__down").fadeOut(300);

            thisBtn.addClass("active");
            dropDownBlock.fadeIn(300);
        }
    });


    /* GO TO TOP */
    $(".btn-goTop-js").on("click", function() {
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
    });


    /* FOOTER MENU MOBILE */
    $(".footer-menu__title").on("click", function() {
        var thisBtn             = $(this),
            windowWidth         = $(window).width(),
            footerMenuContainer = thisBtn.closest(".footer_row");

        if(windowWidth < "768") {
            if(footerMenuContainer.hasClass("active")) {
                footerMenuContainer.removeClass("active");
            } else {
                $(".footer_row").removeClass("active");
                footerMenuContainer.addClass("active");
            }
        }
    });


    /* MOBILE BTN CATEGORY */
    $(".btn-prod-js").on('click', function(){
        var self    = $(this),
            btnAttr  = self.attr("data-js");

        $(".btn-prod-js").removeClass("active");
        self.addClass("active");

        if(btnAttr === "0") {
            $(".row_mobileCategories-js").show();
            $(".categories").hide();
            $(".categories__box:first-child").addClass("active");
        } else {
            $(".row_mobileCategories-js").hide();
            $(".categories").show();
        }
    });
    $(".btn-categories-js").on('click', function(){
        var self            = $(this),
            siblingsDropRow = self.closest(".categories__box");

        if(siblingsDropRow.hasClass("active")) {
            $(".categories__box").removeClass("active");
        } else {
            $(".categories__box").removeClass("active");
            siblingsDropRow.addClass("active");
        }
    });


    /* BTN VIEW PRODUCTS */
    $(".btn-view-js").on("click", function(){
        var btnAttr = $(this).attr("data-view");

        $(".btn-view-js").removeClass("active");
        $(this).addClass("active");

        $(".product").attr("class", "product clearfix").addClass("product_" + btnAttr);
    });


    /* DESCRIPTION */
    $(".btn-description-js").on("click", function(){
        var self                = $(this),
            descriptionBlock    = self.closest(".description__block");

        if(descriptionBlock.hasClass("active")) {
            self.closest(".description__block").removeClass("active");
        } else {
            $(".description__block").removeClass("active");
            self.closest(".description__block").addClass("active");
        }
    });


    /* DOSAGE */
    $(".btn-dosage-js").on('click', function(){
        $(".btn-dosage-js").removeClass("active");
        $(this).addClass("active");
    });
});
function setCookieStore(name, value, expires, path, domain, secure) {
    document.cookie = name + "=" + escape(value) +
        ( (expires)  ? "; expires="  + expires   : "" ) +
        ( (path)     ? "; path="     + path      : "" ) +
        ( (domain)   ? "; domain="   + domain    : "" ) +
        ( (secure)   ? "; secure"                : "" );
}


function getCookieStore(cookieName) {
    var results = document.cookie.match( '(^|;) ?' + cookieName + '=([^;]*)(;|$)' );

    if (results) {
        return (unescape(results[2]));
    } else {
        return null;
    }
}


function languageInit(str) {

    $("[data-id]").each(function(ind, val) {

        var dataVal = $(val).attr("data-id");

        if(lang[str][dataVal] === "" || lang[str][dataVal] === undefined) {
            $(val).html(lang.en[dataVal]);
        } else {
            $(val).html(lang[str][dataVal]);
        }
    });
}

$(document).ready(function(){
    /* GET COOKIE VALUE LANG */
    var getCookieValue  = getCookieStore("LANG");

    if(getCookieValue !== null)
        languageInit(getCookieValue);


    /* LANG BTN FOR TRANSLATE */
    $(".lang__btn").on("click", "a", function(e) {
        e.preventDefault();
        var linkData = $(this).attr("data-lang");

        window.location.reload();

        setCookieStore("LANG", linkData);

        languageInit(linkData);

        less(50, ".product_grid .product__desc");
        less(250, ".product_list .product__desc");
        less(65, ".flash__desc");
    });
});
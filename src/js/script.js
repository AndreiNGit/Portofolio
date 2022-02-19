function RGBA(e, alpha) { //e = jQuery element, alpha = background-opacity
    b = e.css('backgroundColor');
    e.css('backgroundColor', 'rgba' + b.slice(b.indexOf('('), ( (b.match(/,/g).length == 2) ? -1 : b.lastIndexOf(',') - b.length) ) + ', '+alpha+')');
}

$(document).ready(function() {
    //SETUP
    $("#header-nav").hide();

    //MENU
    $(".fa-bars").on("click", function() {
        $("#header-nav").toggle(500);
    });

    $(document).scroll(function() {
        if($(window).scrollTop() > 50) {
            RGBA(jQuery("header"), 0.8);
        }
        else if($(window).scrollTop() < 50)
        {
            $("#header").css("background-color", "");
        }
    });
});
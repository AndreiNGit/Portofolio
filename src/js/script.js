/* ------------- FUNCTIONS ------------- */

function RGBA(e, alpha) { //e = jQuery element, alpha = background-opacity
    b = e.css('backgroundColor');
    e.css('backgroundColor', 'rgba' + b.slice(b.indexOf('('), ( (b.match(/,/g).length == 2) ? -1 : b.lastIndexOf(',') - b.length) ) + ', '+alpha+')');
}

function checkScroll() {
    if($(window).scrollTop() > 50) {
        RGBA(jQuery("header"), 0.8);
    }
    else if($(window).scrollTop() < 50)
    {
        $("#header").css("background-color", "");
    }
}


/* ---------------- CODE -------------- */
$(document).ready(function() {
    /* ---------------- DESKTOP SETUP -------------- */
    if($(document).width() < 1024)
        $("#header-nav").addClass("hidden");
    else
    {
        $("#header-nav").removeClass("hidden");
        $("#header-nav").css("margin-bottom", "0");
    }

    /* ---------------- MOBILE MENU FUNCTIONALITY -------------- */
    $(".fa-bars").on("click", function() {
        if($("#header-nav").hasClass("hidden"))
        {
            $("#header-nav").removeClass("hidden");
            RGBA(jQuery("header"), 0.8);
        }
        else {
            $("#header-nav").addClass("hidden");
            checkScroll();
        }
    });

    /* ---------------- SCROLL COLOR HEADER CHANGE ---------- */
    $(document).scroll(function() {
        checkScroll();
    });
});
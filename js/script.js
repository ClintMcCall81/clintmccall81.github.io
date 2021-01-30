function start() {

    $("#menu a:first").click();

}
$(window).on("load", start);

function loadpage(e) {

    e.preventDefault(); // Prevents pages from opening on click
    
    $("#menu a.active").removeClass("active");
    $(this).addClass("active");

    let href = $(this).attr("href");
    $("#content").load(href);

}

$(document).on("click", "#menu a", loadpage);
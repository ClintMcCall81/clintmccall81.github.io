function start() {

    

}
$(window).on("load", start);

function loadpage(e) {

    e.preventDefault(); // Prevents pages from opening on click
    
    $("#menu a.active").removeClass("active");
    $(this).addClass("active");

    $("#content").load("about.html");

}

$(document).on("click", "#menu a", loadpage);
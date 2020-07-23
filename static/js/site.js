var offset = 0,
    req = false;

$(document).ready(function() {
    $(".sidenav").sidenav();
});

$("nav a:not(.sidenav-trigger), #slide-out a").click(function() {
    $(".sidenav").sidenav("close");
    $.get($(this).data("route"), function(resp) {
        $("#content").fadeOut("fast", function() {
            $("#content").html(resp);
            $(".collapsible").collapsible();
            $(".modal").modal();
            $("#content").fadeIn("fast", function() {
                if ($(".valign-wrapper>.row").height() > $(window).height() - 100) {
                    $(".valign-wrapper").removeClass("valign-wrapper");
                }
                if ($('#photos-wrapper').is(':visible')) {
                    getPhotos();
                }
                else {
                    $('#photos-wrapper .row').html("");
                    offset = 0;
                }
            });
        });
    });
});

function getPhotos() {
    if (!req) {
        req = true;
        $.get("/photos?offset=" + offset, function(resp) {
            $("#photos-wrapper .row").append(resp);
            offset += 24;
            req = false;
        });
    }
}

$(window).scroll(function() {
    if ($(window).scrollTop() + $(window).height() == $(document).height() && $('#photos-wrapper').is(':visible')) {
        getPhotos();
    }
});

$(document).delegate(".photo", "click", function() {
    // $("#large-photo").attr("src", "/img/gallery/" + $(this).data("image"));
    $("#modal-photo").css("background-image", "url(\"/img/gallery/" + $(this).data("image") + "\")");
    console.log("BLARGH")
    $("#modal-photo").modal("open");
});
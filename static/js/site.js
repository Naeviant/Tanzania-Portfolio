$(document).ready(function() {
    $(".sidenav").sidenav();
});

$("nav a:not(.sidenav-trigger), #slide-out a").click(function() {
    $(".sidenav").sidenav("close");
    $.get($(this).data("route"), function(resp) {
        $("#content").fadeOut("fast", function() {
            $("#content").html(resp);
            $(".collapsible").collapsible();
            $("#content").fadeIn("fast", function() {
                if ($(".valign-wrapper>.row").height() > $(window).height() - 100) {
                    $(".valign-wrapper").removeClass("valign-wrapper");
                }
            });
        });
    });
});
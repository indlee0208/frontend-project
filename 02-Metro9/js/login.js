$(function(){
    
    $(window).scroll(function () {
        var scrollPos = $(window).scrollTop();
        if (scrollPos > 0) {
            $("header").addClass("scroll");
            $(".pcHeadTop .logo img").attr("src", "images/logo.png");

            $(".pcHeadTop #nav > li").hover(function () {
                $("header").addClass("active");
            }, function () {
                $("header").removeClass("active");
                $(".pcHeadTop .logo img").attr("src", "images/logo.png");
            });

        } else {
            $("header").removeClass("scroll");
            $(".pcHeadTop .logo img").attr("src", "images/logo.png");

            $(".pcHeadTop #nav > li").hover(function () {
                $("header").addClass("active");
                $(".pcHeadTop .logo img").attr("src", "images/logo.png");
            }, function () {
                $("header").removeClass("active");
                $(".pcHeadTop .logo img").attr("src", "images/logo.png");
            });
        }
    });
    
    $(".pcHeadTop #nav > li").hover(function () {
        $("header").addClass("active");
        $(".pcHeadTop .logo img").attr("src", "images/logo.png");
    }, function () {
        $("header").removeClass("active");
        $(".pcHeadTop .logo img").attr("src", "images/logo.png");
    });
});
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
    
    
    
    
    
    
    
    
    $("#container > .regTable > .row > .pwd > .pwdButton").click(function(e){
        e.preventDefault();
        $(this).next(".pwdInfo").css("display", "block");
    });
    
    $("#container > .regTable > .row > .pwd > .pwdInfo > .closeBtn").click(function(e){
        e.preventDefault();
        $(this).parent(".pwdInfo").css("display", "none");
    });
    
    
    
    
    
    
    
    
    $("#container > .regTable > .row > .email > select").change(function(){
        $("#container > .regTable > .row > .email > .email2").val($(this).val());
    });
    
    
    
});
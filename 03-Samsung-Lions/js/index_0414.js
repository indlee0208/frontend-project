$(function () {
    $.fakeLoader({
        timeToHide: 2000,
        // bgColor: "#3498db",
        bgColor: "#0066b3",
        spinner: "spinner2"
    });


    $("#nav > li").mouseenter(function () {

        var i = $(this).index();
        $(this).addClass("active").siblings("li").removeClass("active");
        $("#nav > li .subWrap").css("display", "block");

        if ($("#nav").hasClass("down")) {
            $("#nav > li").eq(i).find(".subBg").stop().fadeIn(500);
            $("#nav > li").eq(i).siblings("li").find(".subBg").stop().fadeOut(500);
            $("#nav > li").eq(i).find(".subLeft").stop().fadeIn(500);
            $("#nav > li").eq(i).siblings("li").find(".subLeft").stop().fadeOut(500);
            $("#nav > li").eq(i).find(".subLeft > .subTitle").stop().animate({
                opacity: 1
            }, 500, function(){
                $("#nav > li").eq(i).find(".subLeft > .subTitle").css("opacity", 1);
            });
            $("#nav > li").eq(i).find(".subLeft > .subText").stop().animate({
                opacity: 1
            }, 500, function(){
                $("#nav > li").eq(i).find(".subLeft > .subText").css("opacity", 1);
            });
            $("#nav > li").eq(i).siblings("li").find(".subLeft > .subTitle").stop().animate({
                opacity: 0
            }, 500, function(){
                $("#nav > li").eq(i).siblings("li").find(".subLeft > .subTitle").css("opacity", 0);
            });
            $("#nav > li").eq(i).siblings("li").find(".subLeft > .subText").stop().animate({
                opacity: 0
            }, 500, function(){
                $("#nav > li").eq(i).siblings("li").find(".subLeft > .subText").css("opacity", 0);
            });
        } else {
            $("#nav").addClass("down");
            $("#nav > li").eq(i).find(".subBg").stop().slideDown(500);
            $("#nav > li").eq(i).find(".subLeft").stop().slideDown(500);
            $("#nav > li").eq(i).find(".subLeft > .subTitle").stop().animate({
                opacity: 1
            }, 500, function(){
                $("#nav > li").eq(i).find(".subLeft > .subTitle").css("opacity", 1);
            });
            $("#nav > li").eq(i).find(".subLeft > .subText").stop().animate({
                opacity: 1
            }, 500, function(){
                $("#nav > li").eq(i).find(".subLeft > .subText").css("opacity", 1);
            });
            $(".sub").stop().slideDown(500);
        }


    });
                              
                              
                              
     $("header").mouseleave(function () {
        $("#nav").removeClass("down");
        $("#nav > li").removeClass("active");
         $("#nav > li .subWrap").css("display", "none");
        $(".subBg").stop().slideUp(300);
        $(".subLeft").stop().slideUp(300);
        $(".subLeft > .subTitle").stop().animate({
            opacity: 0
        }, 300, function(){
            $(".subLeft > .subTitle").css("opacity", 0);
        });
        $(".subLeft > .subText").stop().animate({
            opacity: 0
        }, 300, function(){
            $(".subLeft > .subText").css("opacity", 0);
        });
        $(".sub").stop().slideUp(300);
        setTimeout(function(){
            $("#nav > li .subWrap").css("display", "none");
        }, 300);
    });
                              
                              
                              
});

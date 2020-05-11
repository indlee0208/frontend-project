$(function () {


    var time;

    var height = $(window).height();
    var w = $(window).outerWidth();

    $(".headBottom").height(height);
   

    $(".pcHeadTop #nav > li").hover(function () {
        $("header").addClass("active");
        $(".pcHeadTop .logo img").attr("src", "images/logo.png");
    }, function () {
        $("header").removeClass("active");
        $(".pcHeadTop .logo img").attr("src", "images/logo_white.png");
    });


    $(window).scroll(function () {
        height = $(window).height();
        $(".fixed").text("h:" + height + "ih:" + ih + "oh:" + oh + "headbottom:" + $(".headBottom").height());
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
            $(".pcHeadTop .logo img").attr("src", "images/logo_white.png");

            $(".pcHeadTop #nav > li").hover(function () {
                $("header").addClass("active");
                $(".pcHeadTop .logo img").attr("src", "images/logo.png");
            }, function () {
                $("header").removeClass("active");
                $(".pcHeadTop .logo img").attr("src", "images/logo_white.png");
            });
        }
    });




    $(".pcHeadTop .gnb > li > button").click(function () {
        w = $(window).outerWidth();

        if (w >= 992) {
            $("body").attr("style", "overflow:hidden");
            $(".pcAllMenu").css("display", "block");
        } else {
            $("body").attr("style", "overflow:hidden");
            $(".mHeadTop").css("display", "block");
            // $(".mHeadTop > .mAllMenu").addClass("active");
            $(".mHeadTop > .mAllMenu").stop().animate({
                right: 0
            }, 500);
        }

    });

    $(".pcAllMenu > .topWrap > button").click(function () {
        $("body").removeAttr("style");
        $(".pcAllMenu").css("display", "none");
    });

    $(".mHeadTop > .mAllMenu > .mAllMenuTop > button").click(function () {
        $("body").removeAttr("style");
        // $(".mHeadTop").css("display", "none");
        // $(".mHeadTop > .mAllMenu").removeClass("active");
        $(".mHeadTop > .mAllMenu").stop().animate({
            right: "-100%"
        }, 500, function () {
            $(".mHeadTop").css("display", "none");
        });
    });






    $(".mHeadTop > .mAllMenu > .mAllMenuBody > .mAllMenuNav > li").click(function () {

        if ($(this).hasClass("active")) {
            $(this).removeClass("active").children("ul").slideUp(500);
        } else {
            $(this).addClass("active").siblings("li").removeClass("active");

            $(this).children("ul").slideDown(500);
            $(this).siblings("li").children("ul").slideUp(500);
        }

    });





    // Scroll Down을 클릭하면 .container 위치로 이동하기
    function moveContainer() {
        var containerPos = $(".container").offset().top - 108;

        $(".headBottom > .infoBar > .scrollDown > a").click(function () {
            console.log(containerPos + "click!!!");
            // 애니메이션일 때에는 window 대신 태그나 선택자로.
            $("html,body").stop().animate({
                scrollTop: containerPos + "px"
            }, 1000);
        });
    }

    moveContainer();

    //    $(window).resize(function () {
    //        moveContainer();
    //    });


    $(window).on("resize load", function () {

        height = $(window).height();
        $(".headBottom").height(height);
        moveContainer();
    });



    function visualText(idx) {
        $(".headBottom li").eq(idx).find("em").delay(500).animate({
            opacity: 1,
            "margin-top": 0
        }, 500, "easeOutBack", function () {
            $(".headBottom li").eq(idx).find("span").animate({
                opacity: 1,
                "margin-top": 0
            }, 500, "easeOutBack")
        });

        $(".headBottom li").eq(idx).siblings().find("em").css({
            "margin-top": "20px",
            "opacity": 0
        });

        $(".headBottom li").eq(idx).siblings().find("span").css({
            "margin-top": "20px",
            "opacity": 0
        });
    }


    visualText(0);


    $(".headBottom > .visualImg > ul > li").eq(0).css("display", "block");




    //            $(".headBottom .leftBtn").click(function() {
    //                var count = $(".headBottom .current").text();
    //                console.log(count);
    //                count--;
    //
    //                if (count < 1) {
    //                    $(".headBottom > .visualImg > ul > li > img").fadeOut(500, function() {
    //                        $(this).attr({
    //                            src: "images/visual_04.jpg",
    //                            alt: $(".headBottom .changeInfo > .text > li").eq(3).text()
    //                        }).fadeIn(500);
    //                    });
    //
    //                    $(".headBottom .changeInfo > .text > li:eq(3)").css("display", "block").siblings("li").css("display", "none");
    //                    $(".headBottom .current").text(4);
    //                } else {
    //                    $(".headBottom > .visualImg > ul > li > img").fadeOut(500, function() {
    //                        $(this).attr({
    //                            src: "images/visual_0" + count + ".jpg",
    //                            alt: $(".headBottom .changeInfo > .text > li").eq(count - 1).text()
    //                        }).fadeIn(500);
    //                    });
    //                    $(".headBottom .changeInfo > .text > li").eq(count - 1).css("display", "block").siblings("li").css("display", "none");
    //                    $(".headBottom .current").text(count);
    //                }
    //            });


    /*var num = 0;
    var height = $('.visualImg>ul>li>img').height();
    $('.visualImg>ul').css('height',height);
    console.log(height);
    $('.headBottom .rightBtn').click(function(){
       num ++; $('.visualImg>ul>li').eq(num).stop().fadeIn(500).siblings().stop().fadeOut(500);
    })*/

    $(".headBottom .leftBtn").click(function () {
        var count = $(".headBottom .current").text();
        count--;
        console.log(count);
        //        var height = $(".visualImg>ul>li>img").outerHeight();
        height = $(".visualImg>ul>li").outerHeight();
        $(".headBottom").css("height", height);

        clearInterval(time);
        $(".headBottom > .infoBar > .changeInfo > .changeBtn > .changeCircle > button").addClass("play");

        if (count < 1) {

            $(".headBottom > .visualImg > ul > li").eq(0).fadeOut(500);
            $(".headBottom > .visualImg > ul > li").eq(3).fadeIn(500);

            $(".headBottom .changeInfo > .text > li:eq(3)").css("display", "block").siblings("li").css("display", "none");

            $(".headBottom .current").text(4);

            visualText(3);

        } else {

            // siblings 뒤의 eq는 남은 자식들 중에서 순서.
            // 헷갈려서 따로 씁니다.
            // $(".headBottom > .visualImg > ul > li").eq(count).fadeOut(500).siblings("li").eq(count-1).fadeIn(500);
            $(".headBottom > .visualImg > ul > li").eq(count).fadeOut(500);
            $(".headBottom > .visualImg > ul > li").eq(count - 1).fadeIn(500);
            $(".headBottom .changeInfo > .text > li").eq(count - 1).css("display", "block").siblings("li").css("display", "none");
            $(".headBottom .current").text(count);

            visualText(count - 1);
        }






    });









    //            $(".headBottom .rightBtn").click(function() {
    //                var count = $(".headBottom .current").text();
    //                console.log(count);
    //                count++;
    //
    //                if (count > 4) {
    //                    $(".headBottom > .visualImg > ul > li > img").fadeOut(500, function() {
    //                        $(".headBottom > .visualImg > ul > li > img").attr({
    //                            src: "images/visual_01.jpg",
    //                            alt: $(".headBottom .changeInfo > .text > li").eq(0).text()
    //                        }).fadeIn(500);
    //                    });
    //                    $(".headBottom .changeInfo > .text > li:eq(0)").css("display", "block").siblings("li").css("display", "none");
    //                    $(".headBottom .current").text(1);
    //                } else {
    //                    $(".headBottom > .visualImg > ul > li > img").fadeOut(500, function() {
    //                        $(".headBottom > .visualImg > ul > li > img").attr({
    //                            src: "images/visual_0" + count + ".jpg",
    //                            alt: $(".headBottom .changeInfo > .text > li").eq(count - 1).text()
    //                        }).fadeIn(500);
    //                    });
    //                    $(".headBottom .changeInfo > .text > li").eq(count - 1).css("display", "block").siblings("li").css("display", "none");
    //                    $(".headBottom .current").text(count);
    //                }
    //            });









    $(".headBottom .rightBtn").click(function () {
        var count = $(".headBottom .current").text();
        count++;
        console.log(count);
        //        var height = $(".visualImg>ul>li>img").outerHeight();
        height = $(".visualImg>ul>li").outerHeight();
        $(".headBottom").css("height", height);

        clearInterval(time);
        $(".headBottom > .infoBar > .changeInfo > .changeBtn > .changeCircle > button").addClass("play");

        if (count > 4) {
            $(".headBottom > .visualImg > ul > li").eq(3).fadeOut(500);
            $(".headBottom > .visualImg > ul > li").eq(0).fadeIn(500);
            $(".headBottom .changeInfo > .text > li:eq(0)").css("display", "block").siblings("li").css("display", "none");
            $(".headBottom .current").text(1);

            visualText(0);

        } else {
            // siblings 뒤의 eq는 남은 자식들 중에서 순서.
            // 헷갈려서 따로 씁니다.
            // $(".headBottom > .visualImg > ul > li").eq(count-2).fadeOut(500).siblings("li").eq(count-2).fadeIn(500);
            $(".headBottom > .visualImg > ul > li").eq(count - 2).fadeOut(500);
            $(".headBottom > .visualImg > ul > li").eq(count - 1).fadeIn(500);
            $(".headBottom .changeInfo > .text > li").eq(count - 1).css("display", "block").siblings("li").css("display", "none");
            $(".headBottom .current").text(count);

            visualText(count - 1);
        }



    });







    function changeVisual() {
        var count = $(".headBottom .current").text();
        count++;
        console.log(count);
        //        var height = $(".visualImg>ul>li>img").outerHeight();
        height = $(".visualImg>ul>li").outerHeight();
        $(".headBottom").css("height", height);

        if (count > 4) {
            $(".headBottom > .visualImg > ul > li").eq(3).fadeOut(500);
            $(".headBottom > .visualImg > ul > li").eq(0).fadeIn(500);
            $(".headBottom .changeInfo > .text > li:eq(0)").css("display", "block").siblings("li").css("display", "none");
            $(".headBottom .current").text(1);

            visualText(0);

        } else {
            // siblings 뒤의 eq는 남은 자식들 중에서 순서.
            // 헷갈려서 따로 씁니다.
            // $(".headBottom > .visualImg > ul > li").eq(count-2).fadeOut(500).siblings("li").eq(count-2).fadeIn(500);
            $(".headBottom > .visualImg > ul > li").eq(count - 2).fadeOut(500);
            $(".headBottom > .visualImg > ul > li").eq(count - 1).fadeIn(500);
            $(".headBottom .changeInfo > .text > li").eq(count - 1).css("display", "block").siblings("li").css("display", "none");
            $(".headBottom .current").text(count);

            visualText(count - 1);
        }
    }

    time = setInterval(changeVisual, 5000);


    $(".headBottom > .infoBar > .changeInfo > .changeBtn > .changeCircle > button").on("click", function () {
        if ($(this).hasClass("play")) {
            $(this).removeClass("play");
            time = setInterval(changeVisual, 5000);
        } else {
            $(this).addClass("play");
            clearInterval(time);
        }
    });








    // https://code-study.tistory.com/31 참고해 볼것.

    //            $('.changeCircle').circleProgress({
    //                startAngle: -Math.PI/2,
    //                value: 1,
    //                animation: true,
    //                thickness:3,
    //                size:46,
    //                fill: "#fff"
    //            });




    $(".headBottom > .infoBar > .changeInfo > .changeBtn > .changeCircle > button").click(function () {
        $(this).toggleClass("pause");
    });









    $(".contents > .noticeWrap > .notice > ul > li").hover(function () {
        var i = $(this).index();
        $(".contents > .noticeWrap > .notice > ul > li").eq(i).find(".noticeTop").stop().animate({
            width: "100%"
        }, 300);

        $(".contents > .noticeWrap > .notice > ul > li").eq(i).find(".noticeRight").stop().delay(300).animate({
            height: "100%"
        }, 300);

        $(".contents > .noticeWrap > .notice > ul > li").eq(i).find(".noticeBottom").stop().animate({
            width: "100%"
        }, 300);

        $(".contents > .noticeWrap > .notice > ul > li").eq(i).find(".noticeLeft").stop().delay(300).animate({
            height: "100%"
        }, 300);

    }, function () {

        var i = $(this).index();
        $(".contents > .noticeWrap > .notice > ul > li").eq(i).find(".noticeTop").stop().delay(300).animate({
            width: "0px"
        }, 300);

        $(".contents > .noticeWrap > .notice > ul > li").eq(i).find(".noticeRight").stop().animate({
            height: "0px"
        }, 300);

        $(".contents > .noticeWrap > .notice > ul > li").eq(i).find(".noticeBottom").stop().delay(300).animate({
            width: "0px"
        }, 300);

        $(".contents > .noticeWrap > .notice > ul > li").eq(i).find(".noticeLeft").stop().animate({
            height: "0px"
        }, 300);
    });









    $(".contents > .customerWrap > .customer > ul > li").hover(function () {
        var i = $(this).index();
        $(".contents > .customerWrap > .customer > ul > li").eq(i).find(".customerTop").stop().animate({
            width: "100%"
        }, 300);

        $(".contents > .customerWrap > .customer > ul > li").eq(i).find(".customerRight").stop().delay(300).animate({
            height: "100%"
        }, 300);

        $(".contents > .customerWrap > .customer > ul > li").eq(i).find(".customerBottom").stop().animate({
            width: "100%"
        }, 300);

        $(".contents > .customerWrap > .customer > ul > li").eq(i).find(".customerLeft").stop().delay(300).animate({
            height: "100%"
        }, 300);

    }, function () {

        var i = $(this).index();
        $(".contents > .customerWrap > .customer > ul > li").eq(i).find(".customerTop").stop().delay(300).animate({
            width: "0px"
        }, 300);

        $(".contents > .customerWrap > .customer > ul > li").eq(i).find(".customerRight").stop().animate({
            height: "0px"
        }, 300);

        $(".contents > .customerWrap > .customer > ul > li").eq(i).find(".customerBottom").stop().delay(300).animate({
            width: "0px"
        }, 300);

        $(".contents > .customerWrap > .customer > ul > li").eq(i).find(".customerLeft").stop().animate({
            height: "0px"
        }, 300);
    });









    $(".topBtn > button").click(function () {
        // 애니메이션일 때에는 window 대신 태그나 선택자로.
        $("html,body").stop().animate({
            scrollTop: 0 + "px"
        }, 1000);
    });









});

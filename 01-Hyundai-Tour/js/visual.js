$(function () {
    // 현재 보여지는 배너가 몇번째 배너인지를 체크해 줄 전역변수 선언
    var showBanner = 0;

    // 버튼을 클릭했을 때 배너를 이동시킬 함수
    function moveBanner() {

        $("#visual > .circleBtn > li").eq(showBanner).addClass("active").siblings("li").removeClass("active");

        // .banner의 위치 조절하기
        $(".banner").stop().animate({
            "margin-left": (-100 * showBanner) + "%"
        }, 500);

        $(".mBanner").stop().animate({
            "margin-left": (-100 * showBanner) + "%"
        }, 500);

        // 첫번째 배너가 보일 때에는 #visual > .arrowBtn > .leftArrow 에 클래스 추가, 형제로 있는 .rightArrow는 클래스 제거
        // 마지막 배너가 보일 때에는 #visual > .arrowBtn > .rightArrow 에 클래스 추가, 형제로 있는 .rightBtn은 클래스 제거
        // 나머지 배너가 보일 때에는 모든 버튼의 클래스 제거
        if (showBanner == 0) {
            $("#visual > .arrowBtn > .leftArrow").addClass("off").next(".rightArrow").removeClass("off");
        } else if (showBanner == 4) {
            $("#visual > .arrowBtn > .rightArrow").addClass("off").prev(".leftArrow").removeClass("off");
        } else {
            $("#visual > .arrowBtn > li").removeClass("off");
        }
    }


    moveBanner();




    $("#visual > .circleBtn > li").click(function () {
        showBanner = $(this).index();
        moveBanner();
    });






    // .arrow > .rightArrow를 클릭하면
    // showBanner 값이 4 미만일 경우 1씩 증가하고 moveBanner() 수행
    $("#visual > .arrowBtn > .rightArrow").click(function () {
        if (showBanner < 4) {
            showBanner++;
        }

        moveBanner();
    });


    // .arrow > .leftArrow을 클릭하면
    // showBanner 값이 0 초과일 경우 1씩 감소하고 moveBanner() 수행
    $("#visual > .arrowBtn > .leftArrow").click(function () {
        if (showBanner > 0) {
            showBanner--;
        }

        moveBanner();
    });









    function mobileNav() {



        // 모바일에서 햄버거 버튼을 클릭하면
        $(".headBottom > .hamBtn > a").on("click", function () {



            if ($(this).children("i").hasClass("icon-hambtn_close_2")) {

                $(this).children("i").attr("class", "icon-hambtn_2");
                $("nav").css("display", "none");
                $("#nav > li > .sub").stop().slideUp(500);

            } else {

                $(this).children("i").attr("class", "icon-hambtn_close_2");

                $("nav").css({
                    "display": "block",
                    "position": "absolute",
                    "width": "100%",
                    "z-index": 100,
                    "background": "#fff",
                    "border-top": "1px solid #006633",
                    "text-align": "justify"
                });

            }

        });


        // #nav > li > a 를 클릭하면
        $("#nav > li > a").on("click", function () {

            var i = $(this).parent("li").index();




            if ($("#nav > li").eq(i).hasClass("active")) {


                $("#nav > li").removeClass("active").children(".sub").stop().slideUp(500);

            } else {

                $("#nav > li").eq(i).addClass("active").children(".sub").stop().slideDown(500);

                $("#nav > li").eq(i).siblings("li").removeClass("active").children(".sub").stop().slideUp(500);
            }

        });

    }




    var w = $(window).outerWidth();

    if (w <= 767) {
        mobileNav();
    }









    // 모바일 환경
    $(window).on("resize", function () {
        var w = $(window).outerWidth();

        if (w <= 767) {
            mobileNav();
        }

    });









});

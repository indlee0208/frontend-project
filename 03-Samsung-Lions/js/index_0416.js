$(function () {



    $("#nav > li").mouseenter(function () {

        var i = $(this).index();
        $(this).addClass("active").siblings("li").removeClass("active");

//        switch (i) {
//            case 0:
//                $("#subBg").addClass("intro").removeClass("roster score history fan shopping");
//                break;
//            case 1:
//                $("#subBg").addClass("roster").removeClass("intro score history fan shopping");
//                break;
//            case 2:
//                $("#subBg").addClass("score").removeClass("intro roster history fan shopping");
//                break;
//            case 3:
//                $("#subBg").addClass("history").removeClass("intro roster score fan shopping");
//                break;
//            case 4:
//                $("#subBg").addClass("fan").removeClass("intro roster score history shopping");
//                break;
//            case 5:
//                $("#subBg").addClass("shopping").removeClass("intro roster score history fan");
//                break;
//            default:
//                $("#subBg").removeClass();
//        }
//
//        console.log(i);

//        $("#subBg").stop().animate({
//            "top": "70px"
//        }, 300);
        $(".subWrap").stop().slideDown(300, function () {
            setTimeout(function () {
//                $("#nav > li").eq(i).find(".subLeft").stop().fadeIn(300).parents("li").siblings("li").find(".subLeft").stop().fadeOut(300);
//            }, 200);
        });
        $("#nav .sub").stop().slideDown(300);


    });

    $("#nav").mouseleave(function () {
        $("#nav .sub").stop().fadeOut(300);
//        $("#subBg").stop().animate({
//            "top": "-400px"
//        }, 300);
        $(".subWrap").stop().slideUp(300);
        $("#nav > li").removeClass("active");
        $("#subBg").removeClass();
    });



});

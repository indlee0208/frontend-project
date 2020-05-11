$(function () {
    
    // 하단 Loading 메시지 제거하기
    $(".ui-loader").hide();
    
    // 배너의 마지막을 복사해서 처음에 붙이기
    var obj = $(".mWebzine > .banner > li").clone();
    $(".mWebzine > .banner").append(obj);

    // .banner > li 한 개의 초기위치
    var liInit;

    // .banner > li 한 개의 너비값 / 2
    var liWidth;

    // 웹진 영역의 너비값
    var webzine;

    // 배너 순서를 체크하는 변수
    var showBanner = 3;
    
    // 현재 페이징 체크할 변수
    var paging = 1;

    function init() {
        // 배너의 초기 위치값 설정
        liWidth = $(".mWebzine > .banner > li").innerWidth();
        // 2 나누기 : 복사한 <li>의 절반 너비만큼 왼쪽으로 이동함
        liInit = liWidth / 2;

        // webzine = $(".mWebzine").innerWidth();

        $(".mWebzine > .banner").css("margin-left", -liWidth * 3 - liInit);
    }

    init();

    $(window).resize(function () {
        init();
    });



    // 왼쪽 스와이프
    $(".mWebzine > .banner").swipeleft(function (e) {


        if (showBanner == 5) {
            showBanner = 1;
            $(".mWebzine > .banner").css("margin-left", -liWidth * 1 - liInit);
        }

        showBanner++;
        
        if (paging == 4) {
            paging = 0;
        }
        
        paging++;

        $(".mWebzine > .banner").stop().animate({
            "margin-left": -showBanner * liWidth - liInit
        }, 500);

        $(".mWebzine > .paging > .current").text(paging);
        
        e.preventDefault();

    });

    // 오른쪽 스와이프
    $(".mWebzine > .banner").swiperight(function (e) {
        
        if (showBanner == 1) {
            showBanner = 5;
            $(".mWebzine > .banner").css("margin-left", -liWidth * 5 - liInit);
        }

        showBanner--;
        
        if (paging == 1) {
            paging = 5;
        }
        
        paging--;

        $(".mWebzine > .banner").stop().animate({
            "margin-left": -showBanner * liWidth - liInit
        }, 500);
        
        $(".mWebzine > .paging > .current").text(paging);
        
        e.preventDefault();

    });









});

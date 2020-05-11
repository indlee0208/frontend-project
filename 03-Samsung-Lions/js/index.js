$(function () {

    $("#nav > li").mouseenter(function () {

        var i = $(this).index();
        $(this).addClass("active").siblings("li").removeClass("active");

        $("body").addClass("subView");

        switch (i) {
            case 0:
                $(".subLeft").addClass("intro").removeClass("roster score history fan shopping");
                break;
            case 1:
                $(".subLeft").addClass("roster").removeClass("intro score history fan shopping");
                break;
            case 2:
                $(".subLeft").addClass("score").removeClass("intro roster history fan shopping");
                break;
            case 3:
                $(".subLeft").addClass("history").removeClass("intro roster score fan shopping");
                break;
            case 4:
                $(".subLeft").addClass("fan").removeClass("intro roster score history shopping");
                break;
            case 5:
                $(".subLeft").addClass("shopping").removeClass("intro roster score history fan");
                break;
            default:
                $(".subLeft").removeClass("intro roster score history fan shopping");
        }

        $(".subWrap").stop().animate({
            height: "384px"
        }, 300, function () {
            setTimeout(function () {
                $("#nav > li").find(".subLeft").stop().fadeOut(300);
                $("#nav > li").eq(i).find(".subLeft").stop().fadeIn(300);
            }, 50);

        });
    });

    $("#nav").mouseleave(function () {
        $("#nav > li").removeClass("active");
        $("body").removeClass("subView");
        $(".subLeft").removeClass("intro roster score history fan shopping").stop().fadeOut(300);
        $(".subWrap").stop().animate({
            height: "0px"
        });
    });









    // 모바일 햄버거 메뉴 보이기
    $(".mGnb .hamBtn > a").on("click", function (e) {

        if ($("body").hasClass("mNavActive")) {
            $("body").removeClass("mNavActive");

            $(".mNavWrap").css({
                "transform": "translateX(1200px)"
            });

            $(".mGnb .hamBtn img").attr("src", "images/gnb_hamBtn.png");

        } else {

            $("body").addClass("mNavActive");

            $(".mNavWrap").css({
                "left": 0,
                "right": 0,
                "transform": "translateX(0)"
            });

            $(".mGnb .hamBtn img").attr("src", "images/gnb_closeBtn.png");
        }

        e.preventDefault();

    });



    // 모바일 메인메뉴 클릭 시 서브메뉴
    $("#mNav > li > a").on("click", function (e) {

        // 몇번째 li인지?
        var i = $(this).parent("li").index();

        // 마지막 li
        var lastLi = $("#mNav > li").length - 1;

        // 자신은 addClass, 나머지는 removeClass
        $("#mNav > li").eq(i).addClass("active").siblings("li").removeClass("active");

        if (i == lastLi) {

            $("#mNav > li").eq(0).addClass("active").siblings("li").removeClass("active");

            $("body").removeClass("mNavActive");

            $(".mNavWrap").css({
                "transform": "translateX(1200px)"
            });

            $(".mGnb .hamBtn img").attr("src", "images/gnb_hamBtn.png");

        }

        e.preventDefault();

    });


    // 마지막 메뉴(쇼핑) 클릭 시 바로 접히고 리다이렉트 하기
    $("#mNav > li").last().children("a").on("click", function (e) {

        $("body").removeClass("mNavActive");

        $(".mNavWrap").css({
            "transform": "translateX(1200px)"
        });

        $(".mGnb .hamBtn img").attr("src", "images/gnb_hamBtn.png");

        $(location).attr("href", "http://samsunglionsmall.com/");

        e.preventDefault();

    });









    $(window).scroll(function () {

        var scrollPos = $(window).scrollTop();
        var docHeight = $(document).height();
        var winHeight = $(window).height();

        var w = $(window).outerWidth();

        if (scrollPos == 0 || scrollPos == docHeight - winHeight || w < 768) {
            $(".sns-side").css("display", "none");
        } else {

            $(".sns-side").css("display", "block");

            // 사이드 SNS 버튼

            $(".sns-side > .sns-side-btn").on("click", function () {

                if ($(".sns-side > .sns-side-btn").hasClass("on")) {
                    $(".sns-side > ul > li").stop().animate({
                        top: 0,
                        opacity: 0
                    }, 300, function () {
                        $(".sns-side").stop().animate({
                            "margin-top": "-20px"
                        }, 300);
                        $(".sns-side > .sns-side-btn").removeClass("on");
                    });
                } else {
                    $(".sns-side").stop().animate({
                        "margin-top": "85px"
                    }, 500, function () {
                        $(".sns-side > ul > li").eq(3).stop().animate({
                            top: "-180px",
                            opacity: 1
                        }, 500);
                        $(".sns-side > ul > li").eq(2).stop().animate({
                            top: "-135px",
                            opacity: 1
                        }, 500);
                        $(".sns-side > ul > li").eq(1).stop().animate({
                            top: "-90px",
                            opacity: 1
                        }, 500);
                        $(".sns-side > ul > li").eq(0).stop().animate({
                            top: "-45px",
                            opacity: 1
                        }, 500);
                    });

                    setTimeout(function () {
                        $(".sns-side > .sns-side-btn").addClass("on");
                    }, 1000);
                }

            });
        }

    });









    // jQuery Animate On Scroll Plugin 사용하기
    AOS.init();

    // You can also pass an optional settings object
    // below listed default settings
    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 400, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });









    var swiper = new Swiper('.allSL', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        initialSlide: 3,
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });




    var swiper = new Swiper('.schedule-swiper', {
        initialSlide: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });









    // 팀 로고 자동화

    // 팀 이름 배열 선언
    var teamArray = ["두산", "키움", "SK", "LG", "NC", "kt", "KIA", "삼성", "한화", "롯데"];

    // 팀 로고 주소 배열 선언
    var teamLogo = ["url(images/schedule_doosan.png)",
                   "url(images/schedule_kiwoom.png)",
                   "url(images/schedule_sk.png)",
                   "url(images/schedule_lg.png)",
                   "url(images/schedule_nc.png)",
                   "url(images/schedule_kt.png)",
                   "url(images/schedule_kia.png)",
                   "url(images/schedule_samsung.png)",
                   "url(images/schedule_hanhwa.png)",
                   "url(images/schedule_lotte.png)"];

    // Mark-up 상에 적혀있는 팀 이름 선언
    var teamName;

    // 몇 번째 있는지 선언
    var teamIndex;

    // 팀 이름과 일치하는 번째수를 찾아주는 함수
    function teamImg() {

        for (var i = 0; i < teamArray.length; i++) {

            if (teamArray[i] == teamName) {
                teamIndex = i;
                break;
            }

        }

    }


    // 경기 갯수
    var gameNum = $(".schedule-swiper .swiper-slide").length;


    for (var j = 0; j < gameNum; j++) {

        // 어웨이 팀
        teamName = $(".schedule-swiper .swiper-slide").eq(j).find(".teamLeft").children(".teamName").children("span").text();

        teamImg();

        $(".schedule-swiper .swiper-slide").eq(j).find(".teamLeft").children(".teamLogo").css("background-image", teamLogo[teamIndex]);


        // 홈 팀
        teamName = $(".schedule-swiper .swiper-slide").eq(j).find(".teamRight").children(".teamName").children("span").text();

        teamImg();

        $(".schedule-swiper .swiper-slide").eq(j).find(".teamRight").children(".teamLogo").css("background-image", teamLogo[teamIndex]);
    }









    // 날씨

    // 날씨 API 주소를 저장할 변수 선언
    var apiURI;

    // 야구장 전체 이름을 저장할 변수 선언
    var stadium = $(".schedule-swiper > .swiper-wrapper > .swiper-slide").eq(1).find(".stadium").text();
    var stadiumFull;

    // 야구장 이름 글자색을 저장할 변수 선언
    var stadiumColor;

    // 야구장이 속한 도시를 저장할 변수 선언
    var city;

    // 잠실 경기장인데 두산 or LG 색깔을 다르게 주기 위해 팀 이름 변수 선언
    var jamsilTeam = $(".schedule-swiper > .swiper-wrapper > .swiper-slide").eq(1).find(".teamRight").children(".teamName").children("span").text();

    console.log(jamsilTeam);

    // 도시 이름에 따라 값을 넣어주기
    if (stadium == "잠실" && jamsilTeam == "두산") {
        apiURI = "http://api.openweathermap.org/data/2.5/weather?api.openweathermap.org/data/2.5/weather?q=Seoul&appid=aed4ad5d562998401ed2e818c76b8557";
        stadiumFull = "서울종합운동장 야구장";
        stadiumColor = "#131230";
        city = "서울특별시";
    } else if (stadium == "잠실" && jamsilTeam == "LG") {
        apiURI = "http://api.openweathermap.org/data/2.5/weather?api.openweathermap.org/data/2.5/weather?q=Seoul&appid=aed4ad5d562998401ed2e818c76b8557";
        stadiumFull = "서울종합운동장 야구장";
        stadiumColor = "#c30452";
        city = "서울특별시";
    } else if (stadium == "고척") {
        apiURI = "http://api.openweathermap.org/data/2.5/weather?api.openweathermap.org/data/2.5/weather?q=Seoul&appid=aed4ad5d562998401ed2e818c76b8557";
        stadiumFull = "고척 스카이돔";
        stadiumColor = "#820024";
        city = "서울특별시";
    } else if (stadium == "문학") {
        apiURI = "http://api.openweathermap.org/data/2.5/weather?q=Incheon&appid=aed4ad5d562998401ed2e818c76b8557";
        stadiumFull = "인천 SK행복드림구장";
        stadiumColor = "#ff0000";
        city = "인천광역시";
    } else if (stadium == "창원") {
        apiURI = "http://api.openweathermap.org/data/2.5/weather?q=Masan&appid=aed4ad5d562998401ed2e818c76b8557";
        stadiumFull = "창원 NC 파크";
        stadiumColor = "#315288";
        city = "경상남도 창원시";
    } else if (stadium == "수원") {
        apiURI = "http://api.openweathermap.org/data/2.5/weather?q=Suwon&appid=aed4ad5d562998401ed2e818c76b8557";
        stadiumFull = "수원 케이티 위즈 파크";
        stadiumColor = "#000000";
        city = "경기도 수원시";
    } else if (stadium == "광주") {
        apiURI = "http://api.openweathermap.org/data/2.5/weather?id=1841808&appid=aed4ad5d562998401ed2e818c76b8557";
        stadiumFull = "광주-기아 챔피언스 필드";
        stadiumColor = "#c70125";
        city = "광주광역시";
    } else if (stadium == "월명") {
        apiURI = "http://api.openweathermap.org/data/2.5/weather?q=Gunsan&appid=aed4ad5d562998401ed2e818c76b8557";
        stadiumFull = "월명 야구장";
        stadiumColor = "#c70125";
        city = "전라북도 군산시";
    } else if (stadium == "대구") {
        apiURI = "http://api.openweathermap.org/data/2.5/weather?q=Daegu&appid=aed4ad5d562998401ed2e818c76b8557";
        stadiumFull = "대구 삼성 라이온즈 파크";
        stadiumColor = "#0066b3";
        city = "대구광역시";
    } else if (stadium == "포항") {
        apiURI = "http://api.openweathermap.org/data/2.5/weather?q=Pohang&appid=aed4ad5d562998401ed2e818c76b8557";
        stadiumFull = "포항 야구장";
        stadiumColor = "#0066b3";
        city = "경상북도 포항시";
    } else if (stadium == "대전") {
        apiURI = "http://api.openweathermap.org/data/2.5/weather?q=Daejeon&appid=aed4ad5d562998401ed2e818c76b8557";
        stadiumFull = "대전 한화생명 이글스 파크";
        stadiumColor = "#ff6600";
        city = "대전광역시";
    } else if (stadium == "청주") {
        apiURI = "http://api.openweathermap.org/data/2.5/weather?q=Cheongju-si&appid=aed4ad5d562998401ed2e818c76b8557";
        stadiumFull = "청주종합운동장 야구장";
        stadiumColor = "#ff6600";
        city = "충청북도 청주시";
    } else if (stadium == "사직") {
        apiURI = "http://api.openweathermap.org/data/2.5/weather?id=1838519&appid=aed4ad5d562998401ed2e818c76b8557";
        stadiumFull = "사직 야구장";
        stadiumColor = "#002955";
        city = "부산광역시";
    } else if (stadium == "문수") {
        apiURI = "http://api.openweathermap.org/data/2.5/weather?id=1833747&appid=aed4ad5d562998401ed2e818c76b8557";
        stadiumFull = "울산 문수 야구장";
        stadiumColor = "#002955";
        city = "울산광역시";
    }



    // 야구장 및 색깔, 도시 넣기
    $(".weather > .stadiumFull").text(stadiumFull).css("color", stadiumColor);
    $(".weather .city").text(city);


    console.log(apiURI);


    $.ajax({
        url: apiURI,
        dataType: "json",
        type: "GET",
        async: "false",
        success: function (data) {
            console.log(data);
            console.log("현재온도 : " + (data.main.temp - 273.15));
            console.log("현재습도 : " + data.main.humidity);
            console.log("날씨 : " + data.weather[0].main);
            console.log("상세날씨설명 : " + data.weather[0].description);
            console.log("날씨 이미지 : " + data.weather[0].icon);
            console.log("바람   : " + data.wind.speed);
            console.log("나라   : " + data.sys.country);
            console.log("도시이름  : " + data.name);
            console.log("구름  : " + (data.clouds.all) + "%");

            // 상세 날씨 설명을 번역할 변수 선언
            var weatherText;

            // 상세 날씨 설명 번역하기
            if (data.weather[0].description == "clear sky") {
                weatherText = "맑음";
            } else if (data.weather[0].description == "few clouds") {
                weatherText = "조금 흐림";
            } else if (data.weather[0].description == "scattered clouds") {
                weatherText = "흐림";
            } else if (data.weather[0].description == "broken clouds") {
                weatherText = "매우 흐림";
            } else if (data.weather[0].description == "shower rain") {
                weatherText = "폭우";
            } else if (data.weather[0].description == "rain") {
                weatherText = "비";
            } else if (data.weather[0].description == "thunderstorm") {
                weatherText = "낙뢰";
            } else if (data.weather[0].description == "snow") {
                weatherText = "눈";
            } else if (data.weather[0].description == "mist") {
                weatherText = "안개";
            }

            // 날씨 아이콘 적용하기
            $(".weather .weatherIcon > img").attr("src", "images/weather/" + data.weather[0].icon + ".svg");

            // 현재 기온을 저장할 변수 선언하기
            var temp = parseInt(data.main.temp - 273.15);

            // 현재 기온 적용하기
            $(".weather .tempText").text(temp);

            // 풍향 각도를 저장할 변수 선언하기
            var fromWind = data.wind.deg - 180;

            // 풍향 아이콘 적용하기
            $(".weather .windIcon > svg").css({
                "transform": "rotate(" + fromWind + "deg)",
                "fill": stadiumColor
            });

            // 풍속 적용하기
            $(".weather .windText").text(data.wind.speed);

            // 상세 날씨 설명 적용하기
            $(".weather .weatherText").text(weatherText);

            // 현재 습도 적용하기
            $(".weather .humidText").text(data.main.humidity);

        }
    });









    $(".slBall > ul > li > a").mouseenter(function () {

        var i = $(this).parent("li").index();

        $(this).find("img").css("transform", "rotate(720deg)");

        $(".slBall > ul > li").eq(i).siblings("li").removeClass("active");

        setTimeout(function () {
            $(".slBall > ul > li").eq(i).find("img").attr("src", "images/sl_ball_none.png");
        }, 500);

        setTimeout(function () {
            $(".slBall > ul > li").eq(i).find("img").attr("src", "images/sl_ball_02.png");
        }, 1000);

        setTimeout(function () {
            $(".slBall > ul > li").eq(i).addClass("active");
        }, 1500);


        $(".slBall > ul > li").eq(i).find(".coverTitle").stop().animate({
            bottom: "20%",
            opacity: 0
        }, 300);

        $(".slBall > ul > li").eq(i).siblings("li").find(".coverTitle").stop().animate({
            bottom: "15%",
            opacity: 1
        }, 300);

        $(".slBall > ul > li").eq(i).find(".textMain").stop().animate({
            top: "50%",
            opacity: 1
        }, 300);

        $(".slBall > ul > li").eq(i).siblings("li").find(".textMain").stop().animate({
            top: "60%",
            opacity: 0
        }, 300);


    });




    $(".slBall > ul > li > a").mouseleave(function () {

        var i = $(this).parent("li").index();

        $(this).find("img").css("transform", "rotate(0deg)");

        setTimeout(function () {
            $(".slBall > ul > li").eq(i).find("img").attr("src", "images/sl_ball_none.png");
        }, 500);

        setTimeout(function () {
            $(".slBall > ul > li").eq(i).find("img").attr("src", "images/sl_ball_01.png");
        }, 1000);

        $(".slBall > ul > li").removeClass("active");

        $(".slBall > ul > li > a > .textWrap > .coverTitle").stop().animate({
            bottom: "15%",
            opacity: 1
        }, 300);

        $(".slBall > ul > li > a > .textWrap > .textMain").stop().animate({
            top: "60%",
            opacity: 0
        }, 300);

    });









    // 뉴스, 공지사항 slick plugin 사용하기
    $('.newsNotice').slick({
        centerPadding: '60px',
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    centerPadding: '40px',
                    slidesToShow: 2
                }
    },
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
    },
            {
                breakpoint: 540,
                settings: {
                    arrows: false,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
    }
  ]
    });









    // .login을 클릭하면 login.html 문서의 모든 내용을 불러와서 #container에 넣기
    $(".login").on("click", function () {
        $.ajax({
            url: "login.html",
            dataType: "html",
            success: function (data) {
                // $("#container").empty().append(data);

                var refine = $("#container").html(data).find(".loginWrap");

                $("#container").html(refine);

                $("body").removeClass("mNavActive");

                $(".mNavWrap").css({
                    "transform": "translateX(1200px)"
                });

                $(".mGnb .hamBtn img").attr("src", "images/gnb_hamBtn.png");

            }
        });


        // $("#container").load("login.html .loginWrap");

    });









    // .join을 클릭하면 join.html 문서의 모든 내용을 불러와서 #container에 넣기
    $(".join").on("click", function () {
        $.ajax({
            url: "join.html",
            dataType: "html",
            success: function (data) {
                // $("#container").empty().append(data);

                var refine = $("#container").html(data).find(".joinWrap");

                $("#container").html(refine);

                $("body").removeClass("mNavActive");

                $(".mNavWrap").css({
                    "transform": "translateX(1200px)"
                });

                $(".mGnb .hamBtn img").attr("src", "images/gnb_hamBtn.png");

            }
        });


        // $("#container").load("login.html .loginWrap");

    });
    
    
    
    
    
    // .access을 클릭하면 access.html 문서의 모든 내용을 불러와서 #container에 넣기
    $(".access").on("click", function () {
        $.ajax({
            url: "access.html",
            dataType: "html",
            success: function (data) {
                // $("#container").empty().append(data);

                var refine = $("#container").html(data).find(".accessWrap");

                $("#container").html(refine);

                $("body").removeClass("mNavActive");

                $(".mNavWrap").css({
                    "transform": "translateX(1200px)"
                });

                $(".mGnb .hamBtn img").attr("src", "images/gnb_hamBtn.png");

            }
        });


        // $("#container").load("login.html .loginWrap");

    });









});

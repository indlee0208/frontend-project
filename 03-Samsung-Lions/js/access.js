$(function () {
    var mapX = new Array(35.840972, 36.007841, 35.864948);
    var mapY = new Array(128.681249, 129.359190, 128.805645);
    var i = 0;
    aa();


    //지도오오오 시작
    function aa() {
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
            mapOption = {
                center: new kakao.maps.LatLng(mapX[i], mapY[i]), // 지도의 중심좌표
                level: 3 // 지도의 확대 레벨
            };



        var map = new kakao.maps.Map(mapContainer, mapOption);

        var center = map.getCenter();

        // 지도에 확대 축소 컨트롤을 생성한다
        var zoomControl = new kakao.maps.ZoomControl();

        // 지도의 우측에 확대 축소 컨트롤을 추가한다
        map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

        // 마커가 표시될 위치입니다 
        var markerPosition = new kakao.maps.LatLng(mapX[i], mapY[i]);

        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
            position: markerPosition
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);

        window.onresize = function () {
            map.relayout();
            map.setCenter(center);
        }


    }
    //지도오오오 끝

    $(".stadiumTab > li").click(function () {
        i = $(this).index();
        // console.log(i);

        aa();
        $(this).addClass("active").siblings().removeClass("active")

    });

});

const url =
  "http://apis.data.go.kr/B551011/GoCamping/basedList?ServiceKey=6NVr24pu%2FC0cP0U3DvoVZd%2BX%2F0q5L3nXeqfLD15nNTZCsRu2nXKNsohKU4UutQUfiSnS8BUrZIqPDRvX6ADHWA%3D%3D&numOfRows=100&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json";

var map = new kakao.maps.Map(document.getElementById("map"), {
  // 지도를 표시할 div
  center: new kakao.maps.LatLng(36.2683, 127.6358), // 지도의 중심좌표
  level: 14, // 지도의 확대 레벨
});

// 마커 클러스터러를 생성합니다
var clusterer = new kakao.maps.MarkerClusterer({
  map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
  averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
  minLevel: 10, // 클러스터 할 최소 지도 레벨
});

// 데이터를 가져오기 위해 jQuery를 사용합니다
// 데이터를 가져와 마커를 생성하고 클러스터러 객체에 넘겨줍니다
$.get("/download/web/data/chicken.json", function (data) {
  // 데이터에서 좌표 값을 가지고 마커를 표시합니다
  // 마커 클러스터러로 관리할 마커 객체는 생성할 때 지도 객체를 설정하지 않습니다
  var markers = $(data.positions).map(function (i, position) {
    return new kakao.maps.Marker({
      position: new kakao.maps.LatLng(position.lat, position.lng),
    });
  });

  // 클러스터러에 마커들을 추가합니다
  clusterer.addMarkers(markers);
});

fetch(url)
  .then((result) => result.json())
  .then((json) => {
    const data = json.responce.body.items.item;
    let markers = [];

    const makeOverListener = (map, marker, infowindow) => {
      return () => {
        infowindow.open(map, marker);
      };
    };

    for (let i = 0; i < data.length; i++) {
      const marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(data[i].mapY, data[i].mapX),
      });
    }
    markers.push(marker);

    const infowindow = new kakao.maps.infoWindow({
      content: data[i].facltNm,
    });
    kakao.maps.event.addListener(
      marker,
      "mouseover",
      makeOverListener(map, marker, infowindow)
    );

    kakao.maps.event.addListener(
      marker,
      "mouseout",
      makeOutListener(infowindow)
    );
  }

  clusterer.addMarkers()
  );

// const getLocation = document.querySelector("#getLocation");

// const showPosition = (position) => {
//   console.log(position);
//   document.querySelector(
//     "#result"
//   ).innerHTML = `<b>위도 : ${position.coords.latitude} </b>   <b>경도 : ${position.coords.longitude}</b>`;
// };

// const errorPosition = () => {};

// getLocation.addEventListener("click", () => {
//   if (window.navigator.geolocation) {
//     window.navigator.geolocation.getCurrentPosition(
//       showPosition,
//       errorPosition
//     );
//   } else {
//     alert("지오로케이션을 지원하지 않습니다");
//   }
// });

//운전 네비게이션

const showPosition = (position) => {
  document.querySelector("#result").innerHTML = `<b>위도 : </b> $ {position, coords.latitude}, <b>경도 : </b> ${position, coords.loongitude} 
}`;

const getLocation = document.querySelector("#getLocation");
getLocation.addEventListener("click", () => {
  if (navigator.geolocation) {
  }
  navigator.geolocation.geoCurrentPosition(showPosition, errorPosition);
});




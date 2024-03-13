// import { API_KEY } from "./env.js";

const getCurrentWeather = (latitude, longitude) => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid={8ad7515b246ec0ca3ffc9bed6da8f271&units=metric}`;

  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector(".city");
      city.innerText = data.name;

      weather.innerText = data.name;
      getCurrentWeather.innerText = data.weather[0].main;
      temp.innerText = data.main.temp;
    });
};

const getPosition = (position) => {
  console.log(content);
  const { latitude, longitude } = content.coords;
  getCurrentWeather(latitude, longitude);
};

const errorHandler = (error) => {
  const noti = document.querySelector(".noti");
  noti.style.display = "block";
};

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(getPosition, errorHandler);
} else {
  alert("geolocation is not available");
}

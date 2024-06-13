import React from "react";

const cityName = (city) => {
  switch (city) {
    case "Paris":
      return "파리";
    case "New york":
      return "뉴욕";
    case "Tokyo":
      return "도쿄";
    case "Seoul":
      return "서울";
    case "Jamwon-dong":
      return "잠원동";
  }
};

const WeatherBox = ({ weather }) => {
  return (
    <div className="weatherBox">
      <div>도시명 : {weather?.name && cityName(weather.name)}</div>
      <h2>
        {" "}
        {weather?.main.temp} ℃ / 습도 : {weather?.main.humidity}
      </h2>
      <h3>현재날씨 : {weather?.weather[0].description}</h3>
    </div>
  );
};

export default WeatherBox;

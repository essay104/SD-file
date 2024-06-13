import "./App.css";
import { useEffect, useState, CSSProperties } from "react";
import WeatherBox from "./components/WeatherBox";
import WeatherButton from "./components/WeatherButton";
import ClipLoader from "react-spinners/ClipLoader";

const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const cities = ["paris", "new york", "tokyo", "seoul"];
  const [loading, setLoading] = useState();

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      console.log("현재위치", lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=kr&units=metric`;
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    setLoading(true);
    console.log(data);
    setWeather(data);
  };

  const getWeatherByCity = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&lang=kr&units=metric`;
    setLoading(false);
    const response = await fetch(url);
    const data = await response.json();
    setLoading(true);
    setWeather(data);
  };

  // useEffect(() => {
  //   getCurrentLocation();
  // }, []);

  // useEffect(() => {
  //   getWeatherByCity();
  // }, [city]);
  // useEffect -> api를 가져오고 싶을때, 콜백함수+의존성 배열
  // getCurrentLocation -> 위도와 경도값필요 -> 변수 설정

  useEffect(() => {
    if (city == "") {
      getCurrentLocation();
    } else {
      getWeatherByCity();
    }
  }, [city]);

  useEffect(() => {}, []);

  return (
    <div className="App">
      <div className="container">
        <ClipLoader color="#f88c6b" loading={loading} size={150} />
      </div>
      <div className="container">
        <WeatherBox weather={weather} />
        <WeatherButton cities={cities} setCity={setCity} />
      </div>
    </div>
  );
}

export default App;

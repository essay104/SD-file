import React from "react";
import "./WatherButton.css";
import { Button } from "react-bootstrap";

const WeatherButton = ({ cities, setCity }) => {
  // console.log(cities);
  return (
    <div className="watherButton">
      <Button variant="warning">Current Location</Button>
      {cities.map((it, idx) => (
        <Button
          onClick={() => {
            setCity(it);
          }}
          key={idx}
        >
          {it}
        </Button>
      ))}
    </div>
  );
};

// 변수를 안에 쓰기 위해 중괄호 사용
export default WeatherButton;

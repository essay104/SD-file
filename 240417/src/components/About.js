import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/");
  };

  return (
    <div>
      <div>About Page</div>
      <button conclick={goToHomePage} />
    </div>
  );
};

export default About;

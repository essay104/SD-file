import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const goProductPage = () => {
    navigate("/product?q=pants");
  };

  return (
    <div className="homePage">
      <div>Home page</div>
      <Link to="/about">Go to about Page</Link>
      <button onClick={goProductPage}>go to product page</button>
    </div>
  );
};

export default Home;

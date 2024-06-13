import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Product from "./components/Product";
import ProductDetail from "./components/ProductDetail";
import LoginPage from "./components/LoginPage";
import userPage from "./components/userPage";

function App() {
  const [authenticate, setAuthenticate] = useState(true);
  const PrivateRoute = () => {
    return authenticate == true ? <userPage /> : <Navigate to="/login" />;
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route
          path="product/:device/:category/:productnum"
          element={<ProductDetail />}
        />
        <Route path="/login" element={<LoginPage />} />
        <Route pathe="/user" element={<PrivateRoute />} />
      </Routes>
    </div>
  );
}

export default App;

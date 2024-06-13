import "./App.css";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductAll from "./components/ProductAll";
import ProductDetail from "./components/ProductDetail";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  const turueok = useSelector((state) => state.auth.authenticate);
  useEffect(() => {
    setAuthenticate(trueok);
  }, [authenticate]);
  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />
        <Route
          path="/product/:id"
          element={<PrivateRoute authenticate={authenticate} />}
        />
      </Routes>
    </div>
  );
}

export default App;

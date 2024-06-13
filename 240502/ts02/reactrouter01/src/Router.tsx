import React from "react";
import { createBrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Root from "./Root";
import NotFound from "./NotFound";
import ErrorComponent from "./ErrorComponent";
import User from "./User";
import Followers from "./Followers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "", element: <Home />, errorElement: <ErrorComponent /> },
      { path: "about", element: <About /> },
      {
        path: "usersID",
        element: <User />,
        children: [{ path: "followers", element: <Followers /> }],
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;

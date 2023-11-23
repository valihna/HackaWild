import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => {
          return await axios
            .get("http://localhost:3000/users")
            .then((res) => res.data);
        },
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

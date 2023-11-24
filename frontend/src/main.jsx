import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Morpion from "../pages/Morpion.jsx";

import "./index.css";
import Calendrier from "../components/Calendrier/Calendrier.jsx";
import Contact from "../pages/Contact.jsx";
import Surprise from "../pages/Surprise.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/Morpion",
        element: <Morpion />,
      },
      {
        path: "/",
        element: <Calendrier />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <Surprise />,
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

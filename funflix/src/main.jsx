import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Router, Routes } from "react-router";
import App from "./App.jsx";
import Header from "./Components/Header.jsx";
import Headerweb from "./Components/Headerweb.jsx";
import Youtube from "./Components/Youtube.jsx";
import Watchvideo from "./Components/Watchvideo.jsx";
import MusicSearch from "./Components/MusicSearch.jsx";


const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path="/" element={<App />}>
      <Route path="/Headerweb" element={<Headerweb />} />
      <Route path="/Youtube" element={<Youtube />} />
      <Route path="/watch/:id" element={<Watchvideo />} />

      <Route path="/MusicSearch" element={<MusicSearch />} />
    </Route>

  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, createBrowserRouter, createRoutesFromElements ,Route ,RouterProvider, Router } from "react-router";
import App from "./App.jsx";
import Header from "./Components/Header.jsx";
import Headerweb from "./Components/Headerweb.jsx";
import Youtube from "./Components/Youtube.jsx";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Headerweb />} />
      <Route path="/Youtube" element={<Youtube />} />

    </Route>
  )
);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
  <App />
    
  </BrowserRouter>
);

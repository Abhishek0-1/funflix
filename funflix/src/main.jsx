import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, createBrowserRouter, createRoutesFromElements ,Route ,RouterProvider, Router } from "react-router";
import App from "./App.jsx";
import Header from "./Components/Header.jsx";
import Headerweb from "./Components/Headerweb.jsx";



const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
  <App />
    
  </BrowserRouter>
);

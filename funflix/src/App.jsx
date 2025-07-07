import { useState } from 'react'
import Header from './Components/Header'
import ReactDOM from "react-dom/client";
import { Outlet } from "react-router-dom";

import './App.css'
import Footer from './Components/Footer';
import Headerweb from './Components/Headerweb';
import Youtube from './Components/Youtube';


function App() {

  return (
    <>
      <div className=''>
        <Header />
        <Outlet />
        <Footer />
      </div>

    </>
  )
}

export default App

import { useState } from 'react'
import Header from './Components/Header'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Outlet } from "react-router";

import './App.css'
import Footer from './Components/Footer';
import Headerweb from './Components/Headerweb';

function App() {

  return (
    <>
      <div className=''>
        <Header />
         <Headerweb />
        <Footer />
      </div>
     
    </>
  )
}

export default App

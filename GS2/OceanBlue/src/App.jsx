import {} from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = "OceanBlue";

    const favicon = document.querySelector("link[rel='icon']");
    if (favicon) {
      favicon.href = '../src/assets/LOGO.png';
    }
  }, []);

  return (
    <>
    <Nav/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App

import {} from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = "Hospital dos Quadrinhos";

    const favicon = document.querySelector("link[rel='icon']");
    if (favicon) {
      favicon.href = '../src/assets/LOGO.svg';
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

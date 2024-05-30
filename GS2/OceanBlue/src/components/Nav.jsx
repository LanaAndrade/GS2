import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/estilo.scss';
import logo from '../assets/LOGO.png';
import { FaBars } from "react-icons/fa";

function Nav() {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 768) {
        setMenuVisible(false); // Hide the menu if the window width is greater than 768 pixels
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <nav className="nav-menu-mobile">
        <div id='logoResponsivo'>
          <img src={logo} alt="logo" />
        </div>
        <button className="bars" id="btnNavResponsiva" onClick={toggleMenu}>          
          <FaBars  />
        </button>
      </nav>

      <nav className="nav-menu"> 
        <Link to="/">
          <div id='logo'>
            <img src={logo} alt="logo" />
          </div>
        </Link>

        <ul id="nav-menu-items" style={{ display: (windowWidth > 680 || isMenuVisible) ? 'flex' : 'none' }}>
          <li>
            <Link to="/apresentacao" className="tlink" onClick={toggleMenu}>
              Apresentação
            </Link>
          </li>
          <li>
            <Link to="/contato" className="tlink" onClick={toggleMenu}>
              Contato
            </Link>
          </li>
          <li>
            <Link to="/Login" className="tlink" onClick={toggleMenu}>
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;

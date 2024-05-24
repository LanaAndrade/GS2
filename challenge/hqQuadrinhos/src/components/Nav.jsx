import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/estilo.scss';
import logo from '../assets/LOGO.svg';
import logoHDQ from '../assets/LogoHDQ.svg';
import { FaBars } from "react-icons/fa";

function Nav() {

  const [isMenuVisible, setMenuVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleMenu = () => {
    if (windowWidth <= 768) {
      setMenuVisible(!isMenuVisible);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <nav className="nav-menu-mobile">
        <div id='logoResponsivo'>
          <img src={logo} alt="logo" />
          <img src={logoHDQ} alt="logo" />
        </div>

        <button className="bars" id="btnNavResponsiva" onClick={toggleMenu}>          
          <FaBars  />
        </button>
      </nav>

      <nav className="nav-menu"> 
        
        <Link to="/">
          <div id='logo'>
            <img src={logo} alt="logo" />
            <img src={logoHDQ} alt="logo" />
          </div>
        </Link>{' '}

        <ul id="nav-menu-items" >
          <li>
            <Link to="/apresentacao" className="tlink" id="itemnav" onClick={toggleMenu}>
              Apresentação
            </Link>
          </li>
          
          <li>
            <Link to="/HQs" className="HQs" id="itemnav" onClick={toggleMenu}>
              HQs
            </Link>
          </li>

          <li>
            <Link to="/contato" className="tlink" id="itemnav" onClick={toggleMenu}>
              Contato
            </Link>
          </li>

          <li>
            <Link to="/avaliarHq" className="tlink" id="itemnav" onClick={toggleMenu}>
              AvaliarHQ
            </Link>
          </li>
        </ul>
      </nav>
      
    </>
  );
}

export default Nav;

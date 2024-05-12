import { useState } from 'react';
import { Link } from 'react-router-dom';

import instrumento1 from '/src/assets/Instrumento1.svg';

import instrumento3 from '/src/assets/instrumento3.svg';
import instrumento4 from '/src/assets/instrumento4.svg';

function HQs() {

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 2 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? 2 : prevSlide - 1));
  };

  return (
    <section className='carousel'>

      <a className="" href="#carouselExampleIndicators" role="button" data-slide="prev" onClick={prevSlide}>
        <span className="" aria-hidden="true"></span>
        <span className=""> ⭠ </span>
      </a>

      <div>

        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className={`carousel-item ${currentSlide === 0 ? 'active' : ''}`}>
              <div className="d-inline-block">
                <div className="slideImgDiv">
                  <img src={instrumento1} className="slideImg" alt="First slide"></img>
                </div>
                <p className='nomeproduto'>Guitarra</p>
                <p className='precoproduto'>R$ 500,00</p> 
              </div>
            </div>
            </div>
            <div className={`carousel-item ${currentSlide === 1 ? 'active' : ''}`}>
              <div className="d-inline-block">
              <div className="slideImgDiv">
                  <img src={instrumento3} className="slideImg" alt="First slide"></img>
                </div>
                <p className='nomeproduto'>Flauta</p>
                <p className='precoproduto'>R$ 200,00</p> 
              </div>
            </div>
            <div className={`carousel-item ${currentSlide === 2 ? 'active' : ''}`}>
              <div className="d-inline-block">
                <div className="slideImgDiv">
                  <img src={instrumento4} className="slideImg" alt="First slide"></img>
                </div>
                <p className='nomeproduto'>Baixo</p>
                <p className='precoproduto'>R$ 600,00</p> 
              </div>
            </div>
          </div>

      </div>

      <a className="" href="#carouselExampleIndicators" role="button" data-slide="next" onClick={nextSlide}>
          <span className="" aria-hidden="true"></span>
          <span className=""> ⭢ </span>
      </a>


    </section>
  );
}

export default HQs;



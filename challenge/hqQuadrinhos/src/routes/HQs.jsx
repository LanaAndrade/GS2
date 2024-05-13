import { useState } from 'react';
import { Link } from 'react-router-dom';

import instrumento1 from '/src/assets/Instrumento1.svg';

import instrumento3 from '/src/assets/instrumento3.svg';
import instrumento4 from '/src/assets/instrumento4.svg';
import setaEsquerda from '/src/assets/setaEsquerda.svg';
import setaDireita from '/src/assets/setaDireita.svg';
import HqCoronavirus from '/src/assets/HQ-CORONAVIRUS-01.jpg';
import tirinhasarampo from '/src/assets/tirinhasarampo.png';
import lombriga from '/src/assets/lombriga.png';

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
        <span className="balaoSetaEsquerda">  
          <img src={setaEsquerda} className="" alt="First slide"></img>
        </span>
      </a>

      <div>

        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className={`carousel-item ${currentSlide === 0 ? 'active' : ''}`}>
              <div className="d-inline-block">
                <div className="slideImgDiv">
                  <img src={tirinhasarampo} className="slideImg" alt="First slide"></img>
                </div>
                <div className="infoHQ">
                  <p className='nomeHQ'>O Raio-X Mágico de Rafael</p>
                  <p className='exameHQ'>Raio-X</p> 
                </div>
              </div>
            </div>
            </div>
            <div className={`carousel-item ${currentSlide === 1 ? 'active' : ''}`}>
              <div className="d-inline-block">
              <div className="slideImgDiv">
                  <img src={HqCoronavirus} className="slideImg" alt="First slide"></img>
                </div>
                <div className="infoHQ">
                  <p className='nomeHQ'>As Incríveis Viagens de Vitória na Veia</p>
                  <p className='exameHQ'>Hemograma</p> 
                </div>
              </div>
            </div>
            <div className={`carousel-item ${currentSlide === 2 ? 'active' : ''}`}>
              <div className="d-inline-block">
                <div className="slideImgDiv">
                  <img src={lombriga} className="slideImg" alt="First slide"></img>
                </div>
                <div className="infoHQ">
                  <p className='nomeHQ'>Missão secreta de espia: dentro do corpo</p>
                  <p className='exameHQ'>Ressonância Magnética</p>
                </div> 
              </div>
            </div>
          </div>

      </div>

      <a className="" href="#carouselExampleIndicators" role="button" data-slide="next" onClick={nextSlide}>
          <span className="" aria-hidden="true"></span>
          <span className="balaoSetaDireita"> 
            <img src={setaDireita} className="" alt="First slide"></img>
          </span>
      </a>


    </section>
  );
}

export default HQs;



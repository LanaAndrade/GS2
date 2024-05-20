import { useState } from 'react';
import { Link } from 'react-router-dom';

import setaEsquerda from '/src/assets/setaEsquerda.svg';
import setaDireita from '/src/assets/setaDireita.svg';
import HqCoronavirus1 from '/src/assets/hqCoronavirus1.jpg';
import HqCoronavirus2 from '/src/assets/hqCoronavirus2.jpg';
import HqCoronavirus3 from '/src/assets/hqCoronavirus3.jpg';
import lombriga1 from '/src/assets/lombriga1.png';
import lombriga2 from '/src/assets/lombriga2.png';
import lombriga3 from '/src/assets/lombriga3.png';
import lombriga4 from '/src/assets/lombriga4.png';


function HQs() {
  const [currentMainSlide, setCurrentMainSlide] = useState(0);
  const [currentAdditionalSlide, setCurrentAdditionalSlide] = useState(0);
  const [showMainCarousel, setShowMainCarousel] = useState(true);

  const nextMainSlide = () => {
    setCurrentMainSlide((prevSlide) => (prevSlide === 2 ? 0 : prevSlide + 1));
  };

  const prevMainSlide = () => {
    setCurrentMainSlide((prevSlide) => (prevSlide === 0 ? 2 : prevSlide - 1));
  };

  const nextAdditionalSlide = () => {
    setCurrentAdditionalSlide((prevSlide) => (prevSlide === 3 ? 0 : prevSlide + 1));
  };

  const prevAdditionalSlide = () => {
    setCurrentAdditionalSlide((prevSlide) => (prevSlide === 0 ? 3 : prevSlide - 1));
  };

  const handleCarouselTransition = () => {
    setCurrentMainSlide(0);
    setShowMainCarousel((prevShowMainCarousel) => !prevShowMainCarousel);
  };

  return (
    <section className="carrossel-grande">
      {showMainCarousel ? (
        <section className="carousel">
          <a className="" href="#carouselExampleIndicators" role="button" data-slide="prev" onClick={prevMainSlide}>
            <span className="" aria-hidden="true"></span>
            <span className="balaoSetaEsquerda">  
              <img src={setaEsquerda} className="" alt="First slide"></img>
            </span>
          </a>

          <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className={`carousel-item ${currentMainSlide === 0 ? 'active' : ''}`}>
                  <div className="d-inline-block">
                    <div className="slideImgDiv">
                      <img src={HqCoronavirus1} className="slideImg" alt="First slide"></img>
                    </div>
                    <div className="infoHQ" onClick={() => handleCarouselTransition()}>
                    <p className='nomeHQ'>O Visitante Indesejado</p>
                      <p className='exameHQ'>Página 1</p> 
                    </div>
                  </div>
                </div>
                <div className={`carousel-item ${currentMainSlide === 1 ? 'active' : ''}`}>
                  <div className="d-inline-block">
                    <div className="slideImgDiv">
                      <img src={HqCoronavirus2} className="slideImg" alt="Second slide"></img>
                    </div>
                    <div className="infoHQ" onClick={() => handleCarouselTransition()}>
                      <p className='nomeHQ'>O Visitante Indesejado</p>
                      <p className='exameHQ'>Página 2</p> 
                    </div>
                  </div>
                </div>
                <div className={`carousel-item ${currentMainSlide === 2 ? 'active' : ''}`}>
                  <div className="d-inline-block">
                    <div className="slideImgDiv">
                      <img src={HqCoronavirus3} className="slideImg" alt="Third slide"></img>
                    </div>
                    <div className="infoHQ" onClick={() => handleCarouselTransition()}>
                    <p className='nomeHQ'>O Visitante Indesejado</p>
                      <p className='exameHQ'>Página 3</p> 
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a className="" href="#carouselExampleIndicators" role="button" data-slide="next" onClick={nextMainSlide}>
            <span className="" aria-hidden="true"></span>
            <span className="balaoSetaDireita"> 
              <img src={setaDireita} className="" alt="Last slide"></img>
            </span>
          </a>
        </section>
      ) : (
        <section className="carousel-adicional">
          <a className="" href="#carouselExampleIndicators" role="button" data-slide="prev" onClick={prevAdditionalSlide}>
            <span className="" aria-hidden="true"></span>
            <span className="balaoSetaEsquerda">  
              <img src={setaEsquerda} className="" alt="First slide"></img>
            </span>
          </a>

          <div className="carousel-inner">
            <div className={`carousel-item ${currentAdditionalSlide === 0 ? 'active' : ''}`}>
              <div className="d-inline-block">
                <div className="slideImgDiv">
                  <img src={lombriga1} className="slideImg" alt="First slide"></img>
                </div>
                <div className="infoHQ" onClick={handleCarouselTransition}>
                <p className='nomeHQ'>Lombrigas não, obrigado!</p>
                  <p className='exameHQ'>Página 1</p> 
                </div>
              </div>
            </div>
            <div className={`carousel-item ${currentAdditionalSlide === 1 ? 'active' : ''}`}>
              <div className="d-inline-block">
                <div className="slideImgDiv">
                  <img src={lombriga2} className="slideImg" alt="Second slide"></img>
                </div>
                <div className="infoHQ" onClick={handleCarouselTransition}>
                <p className='nomeHQ'>Lombrigas não, obrigado!</p>
                  <p className='exameHQ'>Página 2</p> 
                </div>
              </div>
            </div>
            <div className={`carousel-item ${currentAdditionalSlide === 2 ? 'active' : ''}`}>
              <div className="d-inline-block">
                <div className="slideImgDiv">
                  <img src={lombriga3} className="slideImg" alt="Second slide"></img>
                </div>
                <div className="infoHQ" onClick={handleCarouselTransition}>
                  <p className='nomeHQ'>Lombrigas não, obrigado!</p>
                  <p className='exameHQ'>Página 3</p> 
                </div>
              </div>
            </div>
            <div className={`carousel-item ${currentAdditionalSlide === 3 ? 'active' : ''}`}>
              <div className="d-inline-block">
                <div className="slideImgDiv">
                  <img src={lombriga4} className="slideImg" alt="Second slide"></img>
                </div>
                <div className="infoHQ" onClick={handleCarouselTransition}>
                <p className='nomeHQ'>Lombrigas não, obrigado!</p>
                  <p className='exameHQ'>Página 4</p> 
                </div>
              </div>
            </div>

          </div>

          <a className="" href="#carouselExampleIndicators" role="button" data-slide="next" onClick={nextAdditionalSlide}>
            <span className="" aria-hidden="true"></span>
            <span className="balaoSetaDireita"> 
              <img src={setaDireita} className="" alt="Last slide"></img>
            </span>
          </a>
        </section>
      )}
    </section>
  );
}

export default HQs;


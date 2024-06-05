import { useState } from 'react';
import { Link } from 'react-router-dom';
import Ocean1 from '../assets/ocean1.jpeg';
import Ocean2 from '../assets/ocean2.jpeg';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
function Projeto() {

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 2 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? 2 : prevSlide - 1));
  };

  return (
    <section className='Projeto'>

      <div className='carousel'>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className={`carousel-item ${currentSlide === 0 ? 'active' : ''}`}>
              <div className="d-inline-block">
                <img src={img1} alt="First slide"></img>
                <p className='carousel-caption'>Preservação dos oceanos de forma eficiente e responsável</p>
              </div>
            </div>
            </div>
            <div className={`carousel-item ${currentSlide === 1 ? 'active' : ''}`}>
              <div className="d-inline-block">
                <img src={img2} alt="Third slide"></img>
                <p className='carousel-caption'>União entre a tecnologia e a natureza</p>
              </div>
            </div>
            <div className={`carousel-item ${currentSlide === 2 ? 'active' : ''}`}>
              <div className="d-inline-block">
                <img src={img3} alt="Fourth slide"></img>
                <p className='carousel-caption'>Utilização de microcontroladores com o objetivo de monitorar a preservação da natureza</p>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev" onClick={prevSlide}>
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next" onClick={nextSlide}>
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </a>
        </div>


      <div className="homeRow azul">

        <div className="imgHomeDiv">
            <img src={Ocean1} alt="Project image" className="imgHome"></img>
        </div>
        <p className='pHome'>
        O principal problema é a sobre-exploração e a falta de regulamentação adequada, que colocam em risco a biodiversidade marinha e os ecossistemas oceânicos. A sobrecarga da atividade humana nos oceanos leva à degradação dos habitats marinhos, perda de biodiversidade, poluição plástica e alterações climáticas, afetando negativamente tanto a vida marinha quanto os serviços ecossistêmicos que os oceanos fornecem aos humanos. Além disso, a falta de cooperação internacional e políticas públicas eficazes para gerenciar esses recursos contribui para a crise ambiental marinha, tornando difícil alcançar uma “Economia Azul “sustentável que beneficie tanto a sociedade quanto a natureza.        </p>
      </div>

      <div className="homeRow ">

        <p className='pHome'>
        Portanto, para solucionar esse problema e criar uma relação sustentável com o meio ambiente que beneficie tanto a natureza quanto a sociedade percebemos que a palavra chave dessa solução é “equilíbrio” , equilíbrio entre as atividades humanas e a vida marinha , então , o projeto “Ocean Blue – Marine Watch” foi criado. Tendo como foco o monitoramento da fauna marinha em habitats aquáticos que estão localizados perto de industrias como petroquímicas,  mineradoras , usinas hidrelétricas  entre outras que possam prejudicar o habitat natural dessa fauna , a Ocean Blue oferece um serviço de monitoramento e controle ambiental para industriais terem meios mais eficazes de preservar o meio ambiente e ao mesmo tempo continuar com suas atividades de forma mais sustentável e amigável com a natureza . Oferecendo sensores subaquáticos que monitorarão temperatura da agua , luminosidade e movimento da fauna marinha com o objetivo de calcular a população total presente no ambiente e, por fim, monitorar a população afim de determinar se a indústria esta ou não prejudicando o ambiente e diminuindo a fauna local . Com esse projeto buscamos que as indústrias tenham meios para assumir sua responsabilidade ambiental e fazer algo a respeito sempre buscando o equilíbrio entre homem e natureza.        </p>

        <div className="imgHomeDiv">
            <img src={Ocean2} alt="Project image" className="imgHome"></img>
        </div>

      </div>

    </section>
  );
}

export default Projeto;



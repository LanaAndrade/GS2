import { useState } from 'react';
import { Link } from 'react-router-dom';

function Projeto() {

  return (
    <section className='Projeto'>

      <div className="homeRow">

        <div className="imgHomeDiv">
            <img src="" alt="Project image" className="imgHome"></img>
        </div>
        <p className='pHome'>
            Nosso projeto "Hospital dos Quadrinhos" trata de transformar a forma que um paciente criança se relaciona com a informação e com o exame si. Assim, usa histórias em quadrinhos digitais informativas para acalmar tanto o paciente quanto os responsáveis, além de informar de forma lúdica, evitando traumas, estresses e sedações desnecessárias por conta da falta de informações.
        </p>
      </div>

      <div className="homeRow">

        <p className='pHome'>
            Isso é problema relatado por diversos profissionais da saúde, pesquisas e até artigos ciêntificos. A desinformação pode em diversos casos prejudicar o andamento dos cuidados médicos, principalmente crianças, uma vez que as causa ditas anteriormente são mais problemáticas para elas. Desse jeito
            O Hospital dos Quadrinhos tem a missão de ajudar.          
        </p>

        <div className="imgHomeDiv">
            <img src="" alt="Project image" className="imgHome"></img>
        </div>

      </div>

    </section>
  );
}

export default Projeto;



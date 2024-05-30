import { useState } from 'react';
import { Link } from 'react-router-dom';

function Apresentacao() {

  return (
    <section className="pitch image">
        <h2 id="padding-titulo pitch-title" className="titulo-pitch">Separamos aqui um breve pitch para apresentar melhor nosso projeto</h2>
        <iframe id="iframe-pitch" src="https://www.youtube.com/embed/b3wKX77eU0g" title="CHALLENGE 2023/2024 - ESPS 1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>    
    </section>
  );
}

export default Apresentacao;



import { useState } from 'react';
import { Link } from 'react-router-dom';

function Apresentacao() {

  return (
    <section className="pitch image">
        <h2 id="padding-titulo pitch-title" className="titulo-pitch">Apresentação</h2>
        <iframe id="iframe-pitch" src="https://www.youtube.com/watch?v=4Wb967PrX48" title="GS2" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>    
    </section>
  );
}

export default Apresentacao;



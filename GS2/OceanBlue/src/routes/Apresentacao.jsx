import { useState } from 'react';
import { Link } from 'react-router-dom';

function Apresentacao() {

  return (
    <section className="pitch image">
        <h2 id="padding-titulo pitch-title" className="titulo-pitch">Apresentação</h2>
        <iframe id="iframe-pitch" width="1344" height="480" src="https://www.youtube.com/embed/4Wb967PrX48" title="OceanBlue - GS2 - Edge Computing" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>    </section>
  );
}

export default Apresentacao;



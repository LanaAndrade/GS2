import React, { useState, useRef } from 'react';
import '../css/estilo.scss';

import caio from '../assets/caio.jpeg';
import lana from '../assets/lana.jpeg';
import lucas from '../assets/lucas.jpeg';
function Contato() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const emailRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const isEmailValid = validateEmail(email);
    setIsValidEmail(isEmailValid);

    if (isEmailValid) {
    
      console.log('Nome:', nome);
      console.log('Email:', email);
      console.log('Mensagem:', mensagem);

      
      setNome('');
      setEmail('');
      setMensagem('');

      alert('Formulário enviado com sucesso!');
    }
  };

  
  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <section className="contato">
      
        <div className="row">
          <div className="pessoa">
            <div className='imgPessoa-container'>
              <img className='imgPessoa' src={caio} alt="Desenvolvedor"></img>
            </div>
            <p className="nomePessoa">Caio Freitas</p>
          </div>
          <div className="pessoa">
            <div className='imgPessoa-container'>
              <img className='imgPessoa' src={felipe} alt="Desenvolvedor"></img>
            </div>
            <p className="nomePessoa">Felipe Santana</p>
          </div>

          <div className="pessoa">
            <div className='imgPessoa-container'>
              <img className='imgPessoa horizontal' src={enzo} alt="Desenvolvedor"></img>
            </div>
            <p className="nomePessoa">Enzo Barbeli</p>
          </div>

        </div>

        <div className="row">
          <div className="pessoa">
            <div className='imgPessoa-container'>
              <img className='imgPessoa horizontal' src={lana} alt="Desenvolvedor"></img>
            </div>
            <p className="nomePessoa">Lana Andrade</p>
          </div>
          <div className="pessoa">
            <div className='imgPessoa-container'>
              <img className='imgPessoa' src={lucas} alt="Desenvolvedor"></img>
            </div>
            <p className="nomePessoa">Lucas Garcia</p>
          </div>
          <div className="pessoa">
            <div className='imgPessoa-container'>
              <img className='imgPessoa' src={mateus} alt="Desenvolvedor"></img>
            </div>
            <p className="nomePessoa">Mateus Tibão</p>
          </div>

        </div>


    </section>
  );
}

export default Contato;

import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importando o Bootstrap
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
      <div className="container">
        <div className="row justify-content-center">
          <div className="pessoa-container col-md-4 d-flex justify-content-center align-items-center flex-column">
            <div className='imgPessoa-container'>
              <img className='imgPessoa' src={caio} alt="Desenvolvedor"></img>
            </div>
            <p className="nomePessoa">Caio Freitas</p>
          </div>
          <div className="pessoa-container col-md-4 d-flex justify-content-center align-items-center flex-column">
            <div className='imgPessoa-container'>
              <img className='imgPessoa horizontal' src={lana} alt="Desenvolvedor"></img>
            </div>
            <p className="nomePessoa">Lana Andrade</p>
          </div>
        </div>

        <div className="row justify-content-center mt-4">
          <div className="pessoa-container altura-min col-md-4 d-flex justify-content-center align-items-center flex-column">
            <div className='imgPessoa-container'>
              <img className='imgPessoa' src={lucas} alt="Desenvolvedor"></img>
            </div>
            <p className="nomePessoa">Lucas Garcia</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contato;

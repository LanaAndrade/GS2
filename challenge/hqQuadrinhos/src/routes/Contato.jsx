import React, { useState, useRef } from 'react';
import '../css/estilo.css';

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
    <section className="a">
      
      <form className= 'a'onSubmit={handleSubmit}>
        <h2 className='a'>Sugestões, reclamações, agradecimentos... </h2>
        <h2 className='a'>Entre em contato:</h2>
        <div className="a">
          <input 
            type="text"
            className='a'
            placeholder='Seu nome'
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
          <div className="a">
          <input
            type="email"
            id='a'
            placeholder='Seu email'
            ref={emailRef}
            className={!isValidEmail ? 'invalid' : ''}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {!isValidEmail && <p className="error">Por favor, insira um email válido.</p>}
        </div>

        <div className="a">
          <textarea
            placeholder='O que quer contar para a gente'
            value={mensagem}
            className='a'
            onChange={(e) => setMensagem(e.target.value)}
            required
          ></textarea>
        </div>
      </div>      

        <button className= 'a'type="submit">Enviar formulário</button>
      </form>

     
    </section>
  );
}

export default Contato;

import { useRef } from 'react';
import ListaSensor from './ListaSensor';
import '../css/estilo.scss';

function Login() {

  const usuario = useRef();
  const senha = useRef();

  const getUsuario = sessionStorage.getItem('usuario');
  const getSenha = sessionStorage.getItem('senha');

  const handleSubmit = () => {
    if (usuario.current.value == 'Admin' && senha.current.value == '12345') {
      let token =
        Math.random().toString(16).substring(2) +
        Math.random().toString(16).substring(2);

      sessionStorage.setItem('usuario', 'Admin');
      sessionStorage.setItem('senha', token);
    } else {
      alert('Usuario e senha Inválidos !!!');
    }
  };

  return (
    <section className="login">
      {getUsuario && getSenha ? (
        <ListaSensor/>
      ) : (
        <form className="frmLogin" onSubmit={handleSubmit} >

            <h2 className="ttLogin">Bem-vindo faça seu login para continuar</h2>

            <p className="fieldLogin">

              <input type="text" className="inputLogin" placeholder="Seu Usuário" ref={usuario} />

              <input type="password" className="inputLogin" placeholder="Sua senha" ref={senha} />

            </p>
            
            <button className='btnInputLogin' type="submit">Fazer login</button>
        </form>
      )}
    </section>
  );
}
export default Login;

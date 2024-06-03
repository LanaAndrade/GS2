import { useRef } from 'react';
import ListaSensor from './ListaSensor';
import '../css/estilo.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <div className="container  d-flex align-items-center justify-content-center vh-100">
        <div className="card p-4 container-login" style={{maxWidth: '400px', width: '100%'}}>
          <h2 className="text-center mb-4 txt-login">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input type="text" className="form-control container-login placeholder-cor" id="" placeholder="Seu usuário" ref={usuario}/>
            </div>
            <div className="mb-3">
              <input type="password" className="form-control container-login placeholder-cor" id="passwordd" placeholder="Sua senha" ref={senha}/>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary btn-login">Login</button>
            </div>
          </form>
        </div>
        </div>

      )}
    </section>
  );
}
export default Login;

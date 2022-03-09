import { Link } from 'react-router-dom';
import './register.css'

export const Register = () => {
    return(
        <div className="wrapper">
            <div className="slider"></div>
            <div className="sing-up">
                <h1>Registrar</h1>
                <label>Nome completo:</label>
                <input type="text" placeholder='Digite seu nome' />
                <label>e-mail:</label>
                <input type="email" placeholder="Digite um e-mail" />
                <label>Senha:</label>
                <input type="password" placeholder="Digite sua senha" />
                <br/>
                <button>Registrar</button>
                <div className='entrar'>
                    <h2>Já está no Invision? </h2><Link to="/"> Entre.</Link>
                </div>
                
            </div>
        </div>
    )
};
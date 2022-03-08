import '../Home/home.css';
import {Link} from 'react-router-dom';

export const Home = () => {
    return(
        <div className="wrapper">
            <div className="slider">
                
            </div>
            <div className="login">
                <h1>Entrar</h1>
                <label>Email:</label>
                <input type="email" placeholder="Digite seu e-mail" />
                <label>Senha:</label>
                <input type="password" placeholder="Digite sua senha" />
                <br/>
                <button>Entrar</button>
                <div className='entrar'>
                    <h2>Novo no Invision? </h2><Link to="/SingUp"> Cadastre-se.</Link>
                </div>
            </div>
        </div>
        
    )
};
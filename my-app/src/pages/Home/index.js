import '../Home/home.css';
import {Link} from 'react-router-dom';
import Slide from '../Slider';

export const Home = () => {
    return(
        <div className="wrapper">
            <div className="slider">
            <Slide/>
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
                    <h2>Novo no Invision? </h2><Link to="/SingUp"> Crie uma conta.</Link>
                </div>
            </div>
        </div>
        
    )
};
import '../Home/home.css';

export const Home = () => {
    return(
        <div className="wrapper">
            <div className="slider"></div>
            <div className="login">
                <h1>Entrar</h1>
                <input type="email" placeholder="Digite seu e-mail" />
                <br/>
                <input type="password" placeholder="Digite sua senha" />
                <br/>
                <button>Entrar</button>
            </div>
        </div>
        
    )
};
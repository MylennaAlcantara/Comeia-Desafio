import '../Home/home.css';
import {Link} from 'react-router-dom';
import Slide from '../Slider';
import ImageGallery from 'react-image-gallery';
import React, { Component } from 'react';

export const Home = () => {
    const images = [
      {
        original: 'https://public-v2links.adobecc.com/733508c5-4bfb-4dee-62c1-b3188a9bba84/component?params=component_id%3Aaa114763-6939-495e-8939-0dd2f542a9cc&params=version%3A0&token=1647009685_da39a3ee_98f4b8fdb7c015a94f6cd322698a7d567487895d&api_key=CometServer1',
        thumbnail: '',
      },
      
  ];
      
      class MyGallery extends React.Component {
        render() {
          return <ImageGallery items={images} />;
        }
      }
    
    return(
        <div className="wrapper">
            <div className="slider">
                <MyGallery/>
            </div>
            <div className="login">
                <h1>Entrar</h1>
                <form>
                <label>E-mail:</label>
                <input type="email" 
                  placeholder="Digite seu e-mail" 
                  title="E-mail exemplo (formato: xxx@xxx.xxx)" 
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" 
                />
                <br/>
                <label>Senha:</label>
                <input type="password" placeholder="Digite sua senha" />
                <br/><br/>
                <input className="submit" type="submit" value="Entrar"/>
                </form>
                <div className='entrar'>
                    <h2>Novo no Invision? </h2><Link to="/SignUp"> Crie uma conta.</Link>
                </div>
            </div>
        </div>
        
    )
};
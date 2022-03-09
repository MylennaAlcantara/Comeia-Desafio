import '../Home/home.css';
import {Link} from 'react-router-dom';
import Slide from '../Slider';
import ImageGallery from 'react-image-gallery';
import React, { Component } from 'react';

export const Home = () => {
    const images = [
        {
            original: 'https://cdn.alsacreations.net/xmedia/doc/full/1524132051-invisionstudio-view.png',
            thumbnail: 'https://cdn.alsacreations.net/xmedia/doc/full/1524132051-invisionstudio-view.png',
          },
          {
            original: 'https://s3.amazonaws.com/www-assets.invisionapp.com/uploads/2018/07/studio-fb.png',
            thumbnail: 'https://s3.amazonaws.com/www-assets.invisionapp.com/uploads/2018/07/studio-fb.png',
          },
          {
            original: 'https://i.ytimg.com/vi/YXNk4gQCPSY/maxresdefault.jpg',
            thumbnail: 'https://i.ytimg.com/vi/YXNk4gQCPSY/maxresdefault.jpg',
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
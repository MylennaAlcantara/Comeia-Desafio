import '../Home/home.css';
import {Link} from 'react-router-dom';
import Slide from '../Slider';
import ImageGallery from 'react-image-gallery';
import React, { Component } from 'react';

export const Home = () => {
    const images = [
        {
            original: 'https://picsum.photos/id/1018/1000/600/',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
          },
          {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
          },
          {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
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
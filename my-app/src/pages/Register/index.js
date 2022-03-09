import { Link } from 'react-router-dom';
import './register.css'
import ImageGallery from 'react-image-gallery';
import React, { Component } from 'react';


export const Register = () => {
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
            <div className="sign-up">
                <h1>Registrar</h1>
                <form>
                <label>Nome:</label>
                <input type="text" placeholder='Digite seu nome' />
                <br/>
                <label>e-mail:</label>
                <input type="email" 
                    placeholder="Digite um e-mail" 
                    title="E-mail exemplo (formato: xxx@xxx.xxx)" 
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" 
                />
                <br/>
                <label>Senha:</label>
                <input type="password" placeholder="Digite sua senha" />
                <br/><br/>
                <input type="submit" value="Registrar"/>
                </form>
                <div className='entrar'>
                    <h2>Já está no Invision? </h2><Link to="/"> Entre.</Link>
                </div>
                
            </div>
        </div>
    )
};
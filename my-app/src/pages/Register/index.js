import { Link } from 'react-router-dom';
import './register.css'
import ImageGallery from 'react-image-gallery';
import React, { Component } from 'react';


export const Register = () => {
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
                <div className="sign-up">
                    <div className='invision'>
                        Invision
                    </div>
                        <div className='getting-started'>
                            Getting Started
                        </div>
                    <form className='form'>
                    <div className='nome'>
                        <label>Full Name</label>
                        <input type="text" placeholder='Digite seu nome' />
                    </div>
                    <div className='email'>
                        <label>Users name or Email</label>
                        <input type="email" 
                            placeholder="Digite um e-mail" 
                            title="E-mail exemplo (formato: xxx@xxx.xxx)" 
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" 
                        />
                    </div>
                    <div className='senha'>
                        <label>Create Password</label>
                        <input type="password" placeholder="Digite sua senha" />
                    </div>
                    <div className='button'>
                    <input className="submit" type="submit" value="Sign up"/>
                    </div>
                    </form>
                    <div className='or'>
                        <hr/> Or <hr/>
                    </div>
                    <div className='google'>
                        <img src="https://public-v2links.adobecc.com/733508c5-4bfb-4dee-62c1-b3188a9bba84/component?params=component_id%3A0f586810-5933-484c-ae30-ac573c9d967b&params=version%3A0&token=1647009685_da39a3ee_98f4b8fdb7c015a94f6cd322698a7d567487895d&api_key=CometServer1"/>
                    Sign up with Google    
                    </div>
                    <div className='terms'>By signing up, you agree to <p><text>Invision Terms of Conditions</text> and <text>Privacy Policy</text></p></div>
                    <div className='entrar'>
                        Already on Invision?<Link className='Link' to="/">Log in</Link>
                    </div>
                </div>
            </div>
    )
};
import '../Home/home.css';
import {Link} from 'react-router-dom';
import Slide from '../Slider';
import ImageGallery from 'react-image-gallery';
import React, { Component } from 'react';

export const Home = () => {
    const images = [
      {
        original: 'https://public-v2links.adobecc.com/733508c5-4bfb-4dee-62c1-b3188a9bba84/component?params=component_id%3Aaa114763-6939-495e-8939-0dd2f542a9cc&params=version%3A0&token=1647009685_da39a3ee_98f4b8fdb7c015a94f6cd322698a7d567487895d&api_key=CometServer1',
      },
      {
        original: 'https://public-v2links.adobecc.com/733508c5-4bfb-4dee-62c1-b3188a9bba84/component?params=component_id%3Aaa114763-6939-495e-8939-0dd2f542a9cc&params=version%3A0&token=1647009685_da39a3ee_98f4b8fdb7c015a94f6cd322698a7d567487895d&api_key=CometServer1',
      },
      {
        original: 'https://public-v2links.adobecc.com/733508c5-4bfb-4dee-62c1-b3188a9bba84/component?params=component_id%3Aaa114763-6939-495e-8939-0dd2f542a9cc&params=version%3A0&token=1647009685_da39a3ee_98f4b8fdb7c015a94f6cd322698a7d567487895d&api_key=CometServer1',
      },
      
  ];
      
      class MyGallery extends React.Component {
        render() {
          return <ImageGallery items={images} showNav= {false} showFullscreenButton={false} showPlayButton={false} showBullets={true} autoPlay={true}  />;
        }
      }
    
    return(
        <div className="wrapper">
            <div className="slider">
                <MyGallery/>
            </div>
            <div className="login">
                <div className='invision'>Invision</div>
                <div className='welcome'>Welcome to Invision</div>
                <form>
                <div className='email'>
                  <label>Users name or Email</label>
                  <input type="email" 
                    placeholder="Digite seu e-mail" 
                    title="E-mail exemplo (formato: xxx@xxx.xxx)" 
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" 
                  />
                </div>
                <div className='senha'>
                  <label>Password</label>
                  <input type="password" placeholder="Digite sua senha" />
                </div>
                <div className='forgot'>Forgot password?</div>
                
                  <div className='button'>
                    <input className="submit" type="submit" value="Sign in"/>
                  </div>
                
                </form>
                <div className='or'>
                        <hr/> Or <hr/>
                    </div>
                    <div className='google'>
                        <img src="https://public-v2links.adobecc.com/733508c5-4bfb-4dee-62c1-b3188a9bba84/component?params=component_id%3A0f586810-5933-484c-ae30-ac573c9d967b&params=version%3A0&token=1647009685_da39a3ee_98f4b8fdb7c015a94f6cd322698a7d567487895d&api_key=CometServer1"/>
                    Sign up with Google    
                    </div>
                    <div className='entrar'>
                    New Invision? <Link className='Link' to="/SignUp">Create Account</Link>
                    </div>
            </div>
        </div>
        
    )
};
import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

function Slide (){
    const images = [
        {
          original: 'C:\Users\Annelym\Desktop\Log-in-Sing-up\my-app\src\Slider\images\imagem.jpg',
          thumbnail: '',
        },
        {
          original: 'C:\Users\Annelym\Desktop\Log-in-Sing-up\my-app\src\Slider\images\imagem2.jpg',
          thumbnail: '',
        },
        {
          original: 'C:\Users\Annelym\Desktop\Log-in-Sing-up\my-app\src\Slider\images\imagem3.jpg',
          thumbnail: '',
        },
    ];
      
      class MyGallery extends React.Component {
        render() {
          return <ImageGallery items={images} />;
        }
      }
}
export default Slide;
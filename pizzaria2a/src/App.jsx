import './App.css';
import React, { useState, useEffect } from 'react';
import loadingGif from './Rolling@1x-1.0s-200px-200px.gif'
import Refresh from './Refresh'
import { Helmet } from 'react-helmet'
function App() {
  const [images, setImages] = useState(''); 
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {

    
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        setImages(data.message); 
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching dog image:', error);
        setLoading(false)
      });
}, []); 


  return (
    <div>
      <Helmet>
      <title>Imagens Cachorros Aleatórios</title>
<meta name="title" content="Imagens Cachorros Aleatórios" />
<meta name="description" content="Imagens de Cachorros Aleatórios" />

<meta property="og:type" content="website" />
<meta property="og:url" content="https://cachorrosaleatorios.vercel.app/" />
<meta property="og:title" content="Imagens Cachorros Aleatórios" />
<meta property="og:description" content="Imagens de Cachorros Aleatórios" />
<meta property="og:image" content="https://metatags.io/images/meta-tags.png" />


<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="https://cachorrosaleatorios.vercel.app/" />
<meta property="twitter:title" content="Imagens Cachorros Aleatórios" />
<meta property="twitter:description" content="Imagens de Cachorros Aleatórios" />
<meta property="twitter:image" content="https://metatags.io/images/meta-tags.png" />

      </Helmet>
      <h1 className='insta'>By: @y.lipe___</h1>
    <h1>Random Dog Images</h1>
    <div className='container'>
    {loading ? (
      <img 
      className='loading'
        src={loadingGif}
        style={{ maxWidth: '50px', maxHeight: '50px' , objectFit: 'cover'  }} 
      />
    ) : (
      <img src={images} alt="Random Dog" style={{ marginLeft:'20px', width: '300px', height: '300px' }} />
    )}

 </div>
 <div>
  <Refresh></Refresh>
  <li className='api'>Api: DogApi</li>
 </div>

 </div>

);
}

export default App; 
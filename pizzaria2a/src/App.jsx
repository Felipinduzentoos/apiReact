import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import loadingGif from './Rolling@1x-1.0s-200px-200px.gif';
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
    <h1>Olá joséw</h1>
    {loading ? (
      <img 
        src={loadingGif}
        style={{ width: '100px', height: '100px' }} 
      />
    ) : (
      <img src={images} alt="Random Dog" style={{ width: '300px', height: '300px' }} />
    )}
  </div>
);
}

export default App;
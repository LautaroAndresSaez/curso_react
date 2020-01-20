import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import AnimacionesFaciles from './components/AnimacionesFaciles'
import Acordeon from './components/Acordeon'
import Slider from './components/Slider'

const images = [
  {
      src: 'https://images.pexels.com/photos/3380967/pexels-photo-3380967.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      title: 'templo'
  },
  {
      src: 'https://images.pexels.com/photos/3576265/pexels-photo-3576265.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      title: 'caminante'
  },
  {
      src: 'https://images.pexels.com/photos/3552544/pexels-photo-3552544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      title: 'la negra pancha'
  },
  {
      src: 'https://images.pexels.com/photos/3552948/pexels-photo-3552948.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      title: 'vinilo'
  },
  {
      src: 'https://images.pexels.com/photos/3420044/pexels-photo-3420044.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      title: 'trap chinese'
  },

]

function App() {

  const [active, setactive] = useState( false )

  const toggle = () => {
    setactive( !active )
  }

  const preguntasFrecuentes = [
    { id:1, name:'Hacen envios al exterior?', response:'debido a problemas aduaneros no se realizan envios al exterior' },
    { id:2, name:'Hacen envios al exterior?', response:'debido a problemas aduaneros no se realizan envios al exterior' },
    { id:3, name:'Hacen envios al exterior?', response:'debido a problemas aduaneros no se realizan envios al exterior' },
    { id:4, name:'Hacen envios al exterior?', response:'debido a problemas aduaneros no se realizan envios al exterior asdfasfsfffffffffffffffffffffff 2ffffffffffffffffffff 2ffff 2sffffffffffff' },
  ]

  return (
    <div className="App">

       <Slider 
        images = { images }
        interval = { 2000 }
       />
    </div>
  );
}

export default App;

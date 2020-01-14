import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import Peticion from './components/PeticionFecth'
import Peliculas from './components/Peliculas'

function App() {

  

  return (
    <div className="App">
      <h1>Solicitudes HTTP</h1>
      
      <Peticion />

      <Peliculas />
    </div>
  );
}

export default App;

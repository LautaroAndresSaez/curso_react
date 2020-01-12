import React from 'react';
import logo from './logo.svg';
import './App.css';

import IterandoArrays from './components/Arrays'
import IterandoJsonArrays from './components/JsonArrays'
import IterandoJson from './components/Jsons'
import Users from './components/Users'
import IterandoComponentes from './components/Componentes';

function App() {
  return (
    <div className="App">
      <h2>Iternado Arrays</h2>
      <IterandoArrays/>

      <h2>Iterando Json Arrays</h2>
      <IterandoJsonArrays/>

      <h2>Iterando JSONs</h2>
      <IterandoJson/>

      <h2>Propiedad Key</h2>
      <Users/>

      <h2>Iterando Componentes</h2>
      <IterandoComponentes/>
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';

import Entrada from './components/Entrada'
import Graficas from './components/Graficas'
import FancyInput from './components/FancyInput'

function App() {
  const refFancy = React.createRef()
  const click = () =>{
    console.log( refFancy );
    
  }
  
  return (
    <div className="App">
      <h1>React Ref</h1>

      <Entrada/>

      <h2> Librerias Externar utilizando <strong> REFS </strong> </h2>

      <Graficas/>

      <h2> Props rewardref </h2>

      <FancyInput ref = { refFancy }  />

      <button onClick = { click } >
        REF!
      </button>
    </div>
  );
}

export default App;

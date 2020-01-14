import React from 'react';
import logo from './logo.svg';
import './App.css';

import Registro from './components/Registro'
import Mensaje from './components/Mensaje'
import Forms from './components/Forms'

function App() {

  let state = {
    name: '',
    email: ''
  }


  function send( data ){
    console.log( data );
    
  }

  function actualizar( name ,data ){
    state = {
      ...state,
      [name]: data
    }
    
    console.log( state )
  }

  return (
    <div className="App">
      <Registro onSend = { send } />

      <Mensaje onChange = { actualizar } />

      <Forms />
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Hijo from './components/Hijo'
import Header from './components/Header'


const style = { 
  padding: '0.5em',
  margin: '0.5em',
  borderRadius: '0.3em',
  textAling: 'center',
  width: '300px'
}

const styleA = {
  ...style,
  border: '1px solid red'
}

const styleB = {
  ...style,
  border: '1px solid blue'
}

function App() {

  const [ state, setState ] = useState( {
    countA: 0,
    countB: 0
  } )

  const Click = (e) =>{
    console.log( e.saludo );

  }

  const handlerAddA = () => {
    setState( state =>({
      ...state,
      countA: state.countA +1
    } ))
  }

  const handlerAddB = () => {
    setState( state =>({
      ...state,
      countB: state.countB +2
    }) )
  }

  return (
    <div className="App"
          onClick = { Click }
        >
      <Hijo  
          num = { state.countA }
          styles = { styleA }
          name = { 'A' }
          onAdd = { handlerAddB }
      />
      
      <Hijo  
          num = { state.countB }
          styles = { styleB }
          name = { 'B' }
          onAdd = { handlerAddA }
      />

    </div>
  );
}

export default App;

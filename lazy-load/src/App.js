import React, { useState, Suspense } from 'react';
import logo from './logo.svg';
import './App.css';

//import Image from './components/Image'

//code splitting
const Image = React.lazy( () => ( import( './components/Image' ) ) )

function App() {
  const [ show, setShow ] = useState( false )

  const toggle = () =>{
    setShow( !show );
  }

  return (
    <div className="App">
      <button onClick = { toggle } >
        { show ? 'Ocultar' : 'Mostrar' }
      </button>

    {  show && (
      <Suspense fallback= { <h1>Cargando...</h1> } >
        <Image />
      </Suspense>
    )}

    </div>
  );
}

export default App;

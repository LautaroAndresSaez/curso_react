import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import AnimacionesFaciles from './components/AnimacionesFaciles'

function App() {

  const [active, setactive] = useState( false )

  const toggle = () => {
    setactive( !active )
  }

  return (
    <div className="App">
        <AnimacionesFaciles active = { active }/>
        <button onClick = { toggle } >
          CHANGE! { active }
        </button>
    </div>
  );
}

export default App;

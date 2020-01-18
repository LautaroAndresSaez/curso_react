import React from 'react';
import logo from './logo.svg';
import './App.css';


import Patern from './components/Patern'
import Title from './components/Title'
import Button from './components/Button'

import Counter from './components/Counter'

function App() {
  return (
    <div className="App">
      <Counter>
        <Title >
          {( clicks )=>(
            <h1> { clicks } </h1>
          )}
        </Title>
        <Button type='increMent' />
        <Button type='Decrement' />
      </Counter>
    </div>
  );
}

export default App;

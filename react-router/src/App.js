import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route } from 'react-router-dom'

import Header from './components/Header'
import Productos from './components/Productos'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path='/' exact  component = { Header } />
        <Route path='/home' exact component = { Header } />
        <Route path='/home/productos' component = { Productos } />

        <div
          style = {{
            width: '200px',
            border: '3px solid black'
          }}
        >
          <Route path='/productos' component = { Productos } />

        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

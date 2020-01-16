import React, { useState } from 'react';
import PubSub from 'pubsub-js';
import logo from './logo.svg';


import './App.css';




const style = { 
  padding: '0.5em',
  margin: '0.5em',
  borderRadius: '0.3em',
  textAling: 'center',
  width: '300px'
}

const myContext= React.createContext();

class Abuelo extends React.Component{
  render(){
      return(
          <div className = 'box'>
              <Padre />
          </div>
      )
  }
}

class Padre extends React.Component{
  render(){
      return(
          <div  className = 'box'> 
              <Hijo />
          </div>
      )
  }
}


class Hijo extends React.Component{

  handlerClick = () => {
      console.log( ':3' );
      
  }

  dataRecive = ( { clicks, addClick } ) =>(
      <div>
          <button onClick = { addClick }>
              CLICK: { clicks }
          </button>
      </div>
  )

  render(){

      return(
          <myContext.Consumer>
          {
              ( context ) => {
                  return( this.dataRecive( context ) )
              }
          }
          </myContext.Consumer>
      );
  }
}


class App extends React.Component {

  state = {
    clicks: 0
  }

  addClick = () =>{
    this.setState((state) => (
      { clicks: state.clicks + 1 }
    ))
  }

  componentDidMount(){
    PubSub.subscribe( 'saludo', ( e, data )=>{
        console.log(data);
        
    } )
  }
  
  render(){

    const { Provider } = myContext;

    return (
      <Provider value={{
        clicks: this.state.clicks,
        addClick: this.addClick
      }}>
        <div className="App"
              
            >
          
            <Abuelo />
        </div>
      </Provider>
    );
  }
  
}

export default App;

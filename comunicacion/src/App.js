import React, { useState } from 'react';
import PubSub from 'pubsub-js';
import logo from './logo.svg';

import propTypes from 'prop-types';

import clicksContexts from './Contaxts/clicks';

import Hijo from './components/Hijo'
import Lista from './components/Lista'


import './App.css';






const style = { 
  padding: '0.5em',
  margin: '0.5em',
  borderRadius: '0.3em',
  textAling: 'center',
  width: '300px'
}

class Resize extends React.Component {

  static propTypes = {
    render: propTypes.func.isRequired
  }

  state = {
    width: window.innerWidth,
    height: window.innerHeight
  }

  componentDidMount() {
    window.addEventListener( 'resize', this.handlerResize );
  }
  
  componentWillMount(){
    window.removeEventListener( 'resize', this.handlerResize );
  }

  handlerResize = () => {
    this.setState( {
      width: window.innerWidth,
      height: window.innerHeight
    } )
  }

  render(){
    
    const { width, height } = this.state;

    const { render } = this.props;

    return render( { width, height } )
  }

}



const myHoc = ( Comp ) => {
  return class extends React.Component {

    state = {
      clicks: 0
    }

    add = () =>{
      this.setState( state =>({
        clicks: state.clicks + 1 
      }) )
    }

    render(){
      return( 
        <Comp 
          name = "Lauti's APP! "
          clicks = { this.state.clicks }
          add = { this.add }
        />
      )
    }
  }
}
class App extends React.Component {  
  handlerRender = ( data ) =>{
    return(
      <div>
        { data.width } x { data.height }
      </div>
    )
  }
  
  render(){

    return (
      <div>
          <h1>HOLA SOY LA { this.props.name }</h1>

          <button onClick = { this.props.add  }>
            Usted Realizo { this.props.clicks } clicks.
          </button>

      </div>
    );
  }
  
}
export default  myHoc( App ); 


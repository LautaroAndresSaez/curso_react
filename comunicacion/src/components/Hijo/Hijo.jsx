import React from 'react';
import styles from './style.module.css';


import clicksContexts from '../../Contaxts/clicks.js';

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
            <clicksContexts.Consumer>
            {
                ( context ) => {
                    return( this.dataRecive( context ) )
                }
            }
            </clicksContexts.Consumer>
        );
    }
  }

export default Hijo;
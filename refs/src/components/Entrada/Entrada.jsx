import React from 'react';

import styles from './style.module.css';

class Entrada extends React.Component{
    
    entrada = React.createRef();
    
    componentDidMount(){
        this.focus();
    }

    focus = ()=>{
        this.entrada.current.focus();
        
    }

    blur = ()=>{
        this.entrada.current.blur();

    }

    render(){
        return(
            <>
               
               <input type='text' ref={ this.entrada } />
               <button onClick = { this.focus } > FOCUS! </button>
               <button onClick = { this.blur } > BLUR! </button>
            </>
        )
    }
}

export default Entrada;
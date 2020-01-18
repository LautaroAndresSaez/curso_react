import React, { useState, useEffect } from 'react';
import styles from './style.module.css';


const PrimerHook = (props) =>{

    const [ clicks, setClicks ] = useState( 0 );
    const [ emoji, setEmoji ] = useState( '💖' );
    const [ title, setTitle ] = useState( '' );


    const handlerInput = (e) => {
        setTitle( e.target.value );
    }

    const add = () => {
        setClicks( clicks + 1 );
    }

    const toggleEmoji = () =>{
        setEmoji(  emoji === '💖' ? '💕' : '💖'  );
    }


    useEffect( ()=>{
        alert( 'Variable actualizada 👌' )
    }, [ clicks ] );

    return(
        <div>
            <input type='text' onChange={ handlerInput }/>
            <button onClick = { add }>
                CLICKS: { clicks }
            </button>
            <button onClick = {toggleEmoji}>
                CAMBIAR EMOJI!
            </button>

            <h2> { emoji } { title } </h2>
        </div>
    )
        
    
}

export default PrimerHook;
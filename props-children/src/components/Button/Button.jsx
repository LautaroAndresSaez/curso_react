import React, { useState, useEffect} from 'react';
import styles from './style.module.css';


const Button = ({ type, action }) =>{


    
    return(
        <button onClick = { action } >
            { type.toLowerCase() === 'increment' ? 'Agregar' : 'Quitar' }
        </button>
    )
    
}

export default Button;
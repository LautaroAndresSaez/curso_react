import React, { useState, useEffect} from 'react';
import styles from './style.module.css';


const AnimacionesFaciles = ({ active }) =>{

   
    const show = active ? 'show' : 'dont-show' 
    
    return(
        <div className = { styles.header + ' ' + styles[ show ] } >
            <h1> Transiciones en CSS en linea 🔥 </h1>
        </div>
    )
    
}

export default AnimacionesFaciles;
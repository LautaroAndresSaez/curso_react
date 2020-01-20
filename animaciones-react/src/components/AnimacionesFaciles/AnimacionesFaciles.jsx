import React, { useState, useEffect} from 'react';
import styles from './style.module.css';


const AnimacionesFaciles = ({ active }) =>{

   
    const show = active ? styles.show : ''
    
    return(
        <div className = { styles.header + ' ' + show } >
            <h1> Transiciones en CSS en linea 🔥 </h1>
            <ul>
                <li>
                    <div
                        className = { styles.menu }
                    > effect hover </div>
                </li>
            </ul>
        </div>
    )
    
}

export default AnimacionesFaciles;
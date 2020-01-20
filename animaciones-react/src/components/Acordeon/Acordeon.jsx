import React, { useState, useEffect, useRef} from 'react';
import styles from './style.module.css';

import arrow from '../../Images/arrow.svg'

const Acordeon = ( { name, content} ) =>{

    const contentRef = useRef()

    const [ isExpanded, setExpanded ] = useState( false )
    
    const expand = isExpanded ? styles.expand : '';

    const ajustarTexto = {
        height: isExpanded ? contentRef.current.scrollHeight : '0px',
        overflow: 'hidden'
    }

    const arrowStyle = {
        width: '18px',
        transition: 'transform 250ms ease',
        transform: isExpanded ? 'rotate(90deg)' : 'rotate(0)'
    }

    return(
        <div className = { styles.pregunta } >
            <div 
                id = { styles.cosa }
                onClick = { () => setExpanded( !isExpanded ) }
                > 
                <span>  { name }  </span>
                <img  
                    src = { arrow }
                    style = { arrowStyle }
                />
            </div>

            <div className = { expand } 
                style = { ajustarTexto }
                ref = { contentRef }
            >
                { content }
            </div>
        </div>
    )
    
}

export default Acordeon;
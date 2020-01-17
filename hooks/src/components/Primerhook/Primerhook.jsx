import React, { useState } from 'react';
import styles from './style.module.css';


const PrimerHook = (props) =>{

    const [ clicks, setClicks ] = useState( 0 );

    const add = () => {
        setClicks( clicks + 1 );
    }

    return(
        <div>
            <button onClick = { add }>
                CLICKS: { clicks }
            </button>
        </div>
    )
        
    
}

export default PrimerHook;
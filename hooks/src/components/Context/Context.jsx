import React, { useState, useEffect, useContext} from 'react';
import styles from './style.module.css';

import MyContext from '../../Global/contexts'

const Context = (props) =>{

    const { clicks, Add } = useContext( MyContext );
    
    

    return(
        <div>
            <button 
                onClick = {  Add  }
            >
                numero clicks: { clicks}
            </button>
        </div>
    )
    
}

export default Context;
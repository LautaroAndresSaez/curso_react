import React, { useState, useEffect} from 'react';
import styles from './style.module.css';


const Patern = ( { children: ch } ) =>{

    const childrenArray = React.Children.toArray( ch )
    
    const children = childrenArray.map( ( child, index ) => (
        <li key={ index } >
            { child }
        </li>
    ))

    return(
        <div className = { styles.box }>
            <div className = { styles.box + ' ' + styles.blue} >
                { children }
            </div>

            <div className = { styles.box + ' ' + styles.red} >
                
            </div>

        </div>
    )
    
}

export default Patern;
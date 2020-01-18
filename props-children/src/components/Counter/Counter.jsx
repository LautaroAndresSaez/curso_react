import React, { useState, useEffect} from 'react';
import styles from './style.module.css';

import Title from '../Title';
import Button from '../Button';

const Counter = ( { children, type } ) =>{

    

    const [ clicks, setClicks ] = useState( 0 )

    const increment = () =>{
        setClicks( clicks + 1 )
    }

    const decrement = () => {
        setClicks( clicks - 1 )
    }

    const _children = React.Children.map( children, ( child ) =>{
        
        let props = { }
        if( child.type === Title ){
            props.clicks = clicks
        }

        if( child.type === Button ){
            props.action = child.props.type.toLowerCase() === 'increment' ? increment : decrement
        }


        return React.cloneElement( child, props )
    } )


    let counter = (
        <div  >
           { _children }
        </div>
    )

    

    if( !children ){
        counter = (
            <div className = { styles.error }>WOPS! no ingreso ningun children por favor revice el codigo</div>
        )
    }

    return counter
    
}

export default Counter;
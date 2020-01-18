import React, { useState, useEffect} from 'react';
import styles from './style.module.css';


const Image = (props) =>{

    const style = {
        width: '400px',
        border: '1px solid black',
        borderRadius: '.3em'
    }
    
    return(
        <div styles = { style } >
            <img 
                src = 'https://images.pexels.com/photos/3048873/pexels-photo-3048873.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            />
        </div>
    )
    
}

export default Image;
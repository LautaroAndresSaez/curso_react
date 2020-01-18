import React, { useState, useEffect} from 'react';
import styles from './style.module.css';


const Title = ( { clicks, children } ) =>{


    
    return typeof( children ) === 'function' ? children( clicks ): <span> { clicks } </span>
    
}

export default Title;
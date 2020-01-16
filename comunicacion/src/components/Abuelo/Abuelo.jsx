import React from 'react';
import styles from './style.module.css';

import Padre from '../Padre'

class Abuelo extends React.Component{
    render(){
        return(
            <div className = 'box'>
                <Padre />
            </div>
        )
    }
}

export default Abuelo;
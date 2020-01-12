import React from 'react';
import Styles from './style.module.css';

class IterandoArrays extends React.Component{

    frutas = [
        'kiwi',
        'manzana',
        'pera',
        'durazno',
        'sandia'
    ]

    elementoFruta = ( fruta ) =>{
        return(
            <li>
                { fruta }
            </li>
        )
    }

    render(){


        return(
            <div>
                <ul>
                    {this.frutas.map( this.elementoFruta )}
                </ul>
            </div>
        )
    }
}

export default IterandoArrays
import React from 'react';
import styles from './style.module.css';

class Lista extends React.Component{
    render(){
        const { list, render } = this.props

        return(
            <ul>
                {
                    list.map(  (item, index ) => {
                        
                        if( render ){
                            return render( item, index );
                        
                        }

                        return(
                            <li key={ item.name } >
                                { item.name } || ${ item.price }
                            </li>
                        )
                    } )
                
                
                }
            </ul>
        )
    }
}

export default Lista;
import React from 'react';
import styles from './style.module.css';

class Hijo extends React.Component{

    

    render(){

        const { num, onAdd, styles, name } = this.props

        return(
            <div style = { styles } >
                <button onClick = { onAdd }>
                    Component { name } { num }
                </button>
            </div>
        )
    }
}

export default Hijo;
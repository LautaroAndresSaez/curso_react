import React from 'react'

import styles from './style.module.css'

class Mensaje extends React.Component {
    
    state = {
        text: '',
        textError: true,
    }
    
    actulizar = ( event ) => {

        const text = event.target.value;
        const textError = text !== 0 && text.length < 5;
        
        this.setState({
            text,
            textError
        });


        this.props.onChange(  event.target.name, text );
        
    }

    render(){

        return(
            <div className = { styles.formulario }>
                <h1>Contactanos!</h1>
                
                <input type='text' 
                        
                       onChange = { this.actulizar }
                       className = { this.state.textError  ? styles.error : '' }
                       name='name'
                       placeholder = 'Nombre'
                />

                <input type='email' 
                        
                       onChange = { this.actulizar }
                       className = { this.state.textError ? styles.error : '' }
                       name='email'
                       placeholder = 'Email'
                />

            </div>
        )
    }
}


export default Mensaje; 
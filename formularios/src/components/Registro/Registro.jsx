import React from 'react';

import styles from './style.module.css';

class Registro extends React.Component {
    
    nombre = React.createRef()
    email = React.createRef()
    
    registrarUsuario = (event) => {
        event.preventDefault();


        const nombre = event.target[0].value;

        const email = event.target[1].value;

       this.props.onSend( {
           name: nombre,
           email: email
       } )
        
    }
    

    render(){
        return(
            <div className = { styles.registro }>
                <h1>Registro</h1>
                
                <form  onSubmit = { this.registrarUsuario }>

                    <p>
                        <label htmlFor='name' >Nombre: </label>
                        <input type='text' id='name' required  className = { styles.inputs }/>
                    </p>

                    <p>
                        <label htmlFor='email'>Email: </label>
                        <input type='email'  id='email' required className = { styles.inputs }/>
                    </p>

                    <p>
                        <input type='submit' className = { styles.inputs }/>
                    </p>

                </form>
                

            </div>
        )
    }
}

export default Registro
import React from 'react'

import styles from './style.module.css'

class Users extends React.Component{

    users = [
        {id: 1, name: 'Lautaro', email: 'LautaroAndressaez@gmail.com', bio: 'Lorem ipsum'},
        {id: 2, name: 'Leandro', email: 'Lautsafasf21r@mail.com', bio: 'Lorem ipsum'},
        {id: 3, name: 'Pepe', email: 'Lsfasfsez@gmail.com', bio: 'Lorem ipsum'},
        {id: 4, name: 'Juan', email: 'fasfasfa', bio: 'Lorem ipsum'},
        {id: 5, name: 'alfredo', email: 'fasfaetr', bio: 'Lorem ipsum'},
        {id: 6, name: 'pancho', email: 'Lasfasfa', bio: 'Lorem ipsum'},
    ]

    informacionUsuario = (user) =>{
        const { id, name, email, bio } = user;
        console.log( id, name );
        
        return(
            <li key={ id }>
                { name }
            </li>
        )
    }

    render(){
        return(
            <div>
                <ul>
                    { this.users.map( this.informacionUsuario ) }
                </ul>
            </div>
        )
    }
}

export default Users
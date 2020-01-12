import React from 'react'

import styles from './style.module.css'

class IterandoJson extends React.Component{

    state = {
        user: {
            name: 'Lautaro',
            country: 'Argentina',
            number: '1245'
        }
    }

    render(){
        const {user} = this.state
        const keys = Object.keys( user )
        console.log( keys );
        
        return(
            <div>
                <ul>
                    { keys.map( key =>(
                        <li>
                            { key }: { user[key] }
                        </li>
                    ) ) }
                </ul>
            </div>
        )
    }
}

export default IterandoJson
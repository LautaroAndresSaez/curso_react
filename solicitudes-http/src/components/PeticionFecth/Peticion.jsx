import React from 'react';


class Peticion extends React.Component {
    
    state = {
        users: []
    }

    componentDidMount(){
        fetch( 'https://jsonplaceholder.typicode.com/users' )
            .then( response => response.json() )
            .then( users => this.setState( {
                users
            } )  );
    }

    mostrarNombres = () => {
        console.log( this.state.users );
        
        return (
            <ul>
                { this.state.users.map( user => (
                        <li key= { user.id } > { user.name } </li>
                    )
                ) }
            </ul>
        )
    }

    render(){
        return(
            <div>
                { this.mostrarNombres() }
            </div>
        )
    }
}

export default Peticion
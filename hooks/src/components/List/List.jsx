import React, { useState, useEffect} from 'react';
import styles from './style.module.css';


const List = (props) =>{

    const { users } = props;
    
    return(
        <React.Fragment>
            {
                users.map( ( user ) => (
                    <div key ={ user.id } className = { styles.user }>
                        <h1> {user.name} </h1>
                        <h2> {user.email} </h2>
                    </div>
                ))
            }
        </React.Fragment>
    )
    
}

export default List;
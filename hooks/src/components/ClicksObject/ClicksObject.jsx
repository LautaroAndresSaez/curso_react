import React, { useState, useEffect, useLayoutEffect } from 'react';
import styles from './style.module.css';

import List from '../List'

const ClicksObject = (props) =>{

    const [users, setUsers] = useState( [] );
    const url = 'https://jsonplaceholder.typicode.com/users';

    useEffect( ()=>{
        fetch( url )
            .then( response => response.json() )
            .then( usersResponse => setUsers( usersResponse ) )
    }, [])
    
    return(
        <div>
            <List users = { users } />
        </div>
    )
    
}

export default ClicksObject;
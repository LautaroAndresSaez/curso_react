import React, { useState , useDebugValue , useEffect } from 'react';
import { useDebounce } from 'use-debounce'
import logo from './logo.svg';
import './App.css';

import MyContext from './Global/contexts';

const useFecth = ( url, initialState = [] )=>{
  const [ data, setData ] = useState( initialState )
  const [ isFetching, setIsFetching ] = useState( true )

  useEffect(() => {

    setIsFetching( true )
    fetch( url )
      .then( response => response.json() )
      .then( data => {
        setData( data )
        setIsFetching( false )
      } )
    
  }, [ url ])

  
  

  return [ data, isFetching ]
}

function App() {

  const [ click, setClick ] = useState( 0 )

  const [ users, isFetching ] = useFecth( 'https://jsonplaceholder.typicode.com/users' )

  const [ posts, isLoading ] = useFecth( 'https://jsonplaceholder.typicode.com/users/' + ( click + 1) , {} )

  const add = (  ) => {
    setClick( click + 1 )
  }

  return (
    <div>

      <button
        onClick = { add }
      >
        ADD
      </button>

      <h1> { posts.name } </h1>

      {
        isFetching && (
          <h1>CARGANDO!</h1>
        )
      }

      <ul>
        {
          !isFetching && (
            users.map( user => (
              <li key = { user.id } >
                  {user.name}
              </li>
            ) )
          )
        }
      </ul>
      
    </div>
  );
}

export default App;

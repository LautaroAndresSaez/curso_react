import React from 'react';
import axios from 'axios'
import styles from './style.module.css';

class Peliculas extends React.Component {

    url = 'http://www.omdbapi.com/?i=tt3896198&apikey=a51a052a'

    state = {
        movie: {},
        existMovie: false
    }

    buscarPelicula =  async (event) => {
        event.preventDefault();
        console.log( 'bucando...' );

        const nombrePelicula = event.target[0].value;
        console.log( nombrePelicula );
        
        const res = await fetch( this.url + '&t=' + nombrePelicula );
        const movie = await res.json();
            
        this.setState({
            movie: movie,
            existMovie: true
        })
    }

    render() {

        const { movie, existMovie } = this.state

        const visible = existMovie ? '' : 'ocultar';

        return (
            <div  >
                <h1>Buscador de Peliculas</h1>
                <form onSubmit = { this.buscarPelicula }>
                    <input type='text'
                            placeholder='Nombre pelicula' 
                            />
                    <input type='submit' />
                </form>

                <div className = { styles[ visible ] + ' ' + styles.pelicula } >
                    <img src = { movie.Poster } alt='Poster' className = { styles.poster } />
                    <span className = { styles.text } >
                        <h2> { movie.Title } </h2>
                        <p>
                            { movie.Plot }
                        </p>
                    </span>

                    
                </div>
            </div>
        )
    }
}

export default Peliculas
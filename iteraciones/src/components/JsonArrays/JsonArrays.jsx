import React from 'react'

import styles from './style.module.css'

class IterandoJsonArrays extends React.Component{

    state = {
        productos: [
            {
                id: 1,
                nombre: 'telefono',
                precio: 299,
                colores: ['blanco', 'negro', 'violeta']
            },
            {
                id: 2,
                nombre: 'mouse',
                precio: 10,
                colores: ['rojo', 'marron', 'cian']
            },
            {
                id: 3,
                nombre: 'cartuchera',
                precio: 19,
                colores: ['blanco', 'negro']
            },
        ],
        frutaSeleccionada: {}
    }

    informacionProducto = (producto) =>{
        const { id, nombre, precio, colores } = producto

        return(
            <div className={ styles.producto }
                onClick={ this.selecionarItem.bind( this, producto ) }

                style = {{
                    color: this.state.frutaSeleccionada.nombre === nombre
                    ? 'red'
                    : '#000'
                }}

                key = { id }>
                <h2>{ nombre }</h2>
                <h3> ${ precio } </h3>
            </div>
        )
    }

    selecionarItem = ( producto, evento )=>{
        this.setState({
            ...this.state,
            frutaSeleccionada: producto
        })
        console.log( this.state )
        
    }

    render(){
        return(
            <div>
                { this.state.productos.map( this.informacionProducto ) }
            </div>
        )
    }
}

export default IterandoJsonArrays;
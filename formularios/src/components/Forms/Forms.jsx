import React from 'react';

class Forms extends React.Component {

   state = {
       techs: ['vue'],
       active: false
   }

   handlerChange = ( event ) => {
        const techs = Array.from(
            event.target.selectedOptions,
            (option) => option.value
        );


        this.setState({
           techs
       });

       console.log( techs );
   }

   handlerChecked = ( event ) =>{
       console.log( event.target.checked );
       
       this.setState({
            ...this.state,
            active: event.target.checked
       })
   }

    render(){

        return (
            <div>
                <form 
                >
                    <select value= { this.state.techs } multiple
                            onChange = { this.handlerChange }>
                        <option value= 'react'>
                            React
                        </option>
                        <option value= 'vue'>
                            Vue
                        </option>
                        <option value='angular'>
                            angular
                        </option>
                        <option value='vanilla'>
                            vanilla
                        </option>

                        
                    </select>

                    
                    <p>
                        <input 
                            type='checkbox'  
                            checked = { this.state.active }
                            onChange = { this.handlerChecked }   
                        />
                    </p>

                </form>

                <div>
                    <h2>Seleccionados</h2>

                    <ul>
                        { this.state.techs.map( tech => (
                            <li key = { tech } >
                                { tech }
                            </li>
                        ) ) }
                    </ul>
                </div>

            </div>
        )

    }
}

export default Forms   
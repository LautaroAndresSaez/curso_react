import React, { useState, useEffect} from 'react';
import styles from './style.module.css';


const Slider = ( { images, interval } ) =>{

    const [ activeIndex, setActiveIndex ] = useState( 0 )

    useEffect(() =>{
        const tick = setInterval( () => {
            let activeIndexNew = 0
            if ( activeIndex < images.length - 1 ){
                activeIndexNew = activeIndex + 1
            }

            setActiveIndex( activeIndexNew )
        }, interval )

        return( ()=>{
            clearInterval( tick )
        } )
    }, [ activeIndex, images.length ] )
    

    return(
        <div className = { styles.slide } >
            <div className = { styles.container } >
                {
                    images.map( (image, index) => {       
                        return(
                            <img
                                src = { image.src }
                                key = { image.src }
                                alt = { image.title }
                                className = { 
                                    index === activeIndex 
                                        ? styles.image + ' ' + styles[ 'animation-show' ]
                                        : styles.image + ' ' + styles[ 'animation-hide' ]
                                 }
                            />
                        )
                    })
                }

                <div className = { styles.title } >
                    { images[ activeIndex ].title }
                </div>
            </div>
        </div>
    )
    
}

Slider.defaultProps = {
    images: []
}

export default Slider;
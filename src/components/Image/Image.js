import React from "react";
import './Igitgmage.css'


export default function Image( {image} ){
    return(
        <div className='imageContainer' >
                <img className='image' src={image.url} />
                <div className='title'> {image.title} </div>
                </div> 
    )
}
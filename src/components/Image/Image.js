import React from "react";
import './Image.css'


export default function Image( {image} ){
    return(
        <div className='imageCard' >
                <img className='image' src={image.url} />
                {/* <div className='title'> {image.title} </div> */}
                </div> 
    )
}
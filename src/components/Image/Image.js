import React, {useState} from "react";
import './Image.css'


export default function Image( {image} ){


    //aqui eu quero que o subtitle da minha imagem apareca so quando eu hover over it
    let [titleVisibility, setTitleVisibility] = useState(false)

    function handleMouseOver(){
        setTitleVisibility(true)
    }

    let titleClass = titleVisibility ? 'title' : 'title hidden'

    // we stack css classes together and in this way we can apply the atributes of both at the same time (title hidden)

    function handleMouseOut(){
        setTitleVisibility(false)
    }


    return(
        <div className='imageCard' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >
                <img className='image' src={image.url} />
                <div className={titleClass}> {image.title} </div>
                {/* here I am applying two classes in once */}
                </div> 
    )
}
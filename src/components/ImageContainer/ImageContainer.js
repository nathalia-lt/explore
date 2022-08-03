import './ImageContainer.css'
import Image from '../Image/Image'


export default function ImageContainer( {imageData} ){
let imagesToDisplay = imageData.map((image, idx) => {
    return(
        <Image
        key={idx}
        image={image}
        />
    )
})

let imagesTernary = imageData.length ? imagesToDisplay : null
//Here I am checking if there is information in your data array or not.
//if there isnt there will be erros and your aplication is going to crash

    return(
        <div className= 'imageContainer'>
        {imagesTernary}
        </div>

    )
}
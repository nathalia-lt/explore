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
    return(
        <div>
            {imageData.length ? imagesToDisplay : null}
        </div>

    )
}
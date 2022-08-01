import './ImageContainer.css'


export default function ImageContainer( {imageData} ){

    return(
        <div>
            {imageData[0] ? <img src={imageData[0].url} /> : null}
        </div>
    )
}
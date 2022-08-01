import './ImageContainer.css'


export default function ImageContainer( {imageData} ){





    return(
        <div>
            {imageData[0] ? <div className='imageContainer' >
                <img className='image' src={imageData[0].url} />
                <div className='title'> {imageData[0].title} </div>
                </div> : null}
        </div>

    )
}
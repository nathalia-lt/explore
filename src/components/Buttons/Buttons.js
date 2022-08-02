import './Buttons.css'



export default function Buttons( {handleLeftClick, handleRightClick, pageNum} ){
    return(
        <div className='pageNumButtons'>
        <button className='pageNewButton' onClick={handleLeftClick}> ← </button>
        <div>{pageNum}</div>
        <button className='pageNewButton' onClick={handleRightClick}> → </button>
    </div>
    )
}
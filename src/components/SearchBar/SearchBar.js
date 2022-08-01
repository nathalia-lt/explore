import './SearchBar.css'

export default function SearchBar( {handleSearchChange, search, handleSubmit} ) {
    return (
        <div className= 'searchBar'>
            <input className = 'searchInput'  
                type='text'
                placeholder='Search image here' //aqui eu coloco a frase que vai dentro do quadrado onde eu procuro
                value={search}
                onChange={handleSearchChange}
            />
            <button className='submitButton'
            onClick={handleSubmit} > 🔍 </button>
        </div>
    )
}
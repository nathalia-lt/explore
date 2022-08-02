import './SearchBar.css'

export default function SearchBar( {handleSearchChange, search, handleSubmit} ) {
    


    return (
        <div className= 'searchBar'>
            <form onSubmit={handleSubmit}>
            <input className = 'searchInput'  
                type='text'
                placeholder='Search image here' //aqui eu coloco a frase que vai dentro do quadrado onde eu procuro
                value={search}
                onChange={handleSearchChange}
            />
            <button className='submitButton'
            > 🔍 </button>
            {/* aqui eu coloco onSubmit pq quero que funcione quando eu clico enter as well, se eu colocasse so onClick so funcionaria eu clicando com o mouse  */}
            {/* para isso eu preciso wrapped in form pq onSubmit so funciona em form */}
            </form>
        </div>
    )
}
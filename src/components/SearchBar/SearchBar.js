import './SearchBar.css'

export default function SearchBar( {handleSearchChange, search, handleSubmit} ) {
    return (
        <div>
            <input type='text'
                value={search}
                onChange={handleSearchChange}
            />
            <button onClick={handleSubmit} > submit </button>
        </div>
    )
}
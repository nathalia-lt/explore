import './App.css';
import React, { useEffect, useState } from 'react';
import config from '../../key'
import ImageContainer from '../ImageContainer/ImageContainer';

function App() {

  let [imageData, setImageData] = useState([])

  //set up useEffect fot fetching
  // console.log(config)
  // useEffect(() => {

  // },[])

  let [search, setSearch] = useState('')

  function handleSearchChange(event) {
    setSearch(event.target.value)
  }

  function handleSubmit() {
    console.log('hello')
    let url = 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?q=' + { search } + '&pageNumber=1&pageSize=10&autoCorrect=true'
    fetch(url, config)
      .then(response => response.json())
      .then(response => setImageData(response.value))
      .catch(err => console.error(err));
  }

  return (
    <div>
      <input type='text'
        value={search}
        onChange={handleSearchChange}
      />
      <button onClick={handleSubmit} > submit </button>
      <ImageContainer
      imageData={imageData}
      />
    </div>
  );
}

export default App;

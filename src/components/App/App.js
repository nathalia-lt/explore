import './App.css';
import React, {useEffect, useState} from 'react';
import config from '../../key'

function App() {

let [imageData, setImageData] = useState([])

//set up useEffect fot fetching
console.log(config)
useEffect(() => {
  fetch('https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?q=horse&pageNumber=1&pageSize=10&autoCorrect=true', config)
    .then(response => response.json())
    .then(response => setImageData(response.value))
    .catch(err => console.error(err));
},[])

  

  return (
    <div>
      <img src={imageData[0].url} 
      />
    </div>
  );
}

export default App;

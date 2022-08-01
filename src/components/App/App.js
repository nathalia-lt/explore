import './App.css';
import React, {useEffect, useState} from 'react';
import config from '../../key'

function App() {

let [imageData, setImageData] = useState([])

//set up useEffect fot fetching
console.log(config)
useEffect(() => {},[])

  
  
  // fetch('https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?q=taylor%20swift&pageNumber=1&pageSize=10&autoCorrect=true', options)
  //   .then(response => response.json())
  //   .then(response => console.log(response))
  //   .catch(err => console.error(err));
  return (
    <div>
 
    </div>
  );
}

export default App;

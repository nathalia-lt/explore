import './App.css';
import React, { useEffect, useState } from 'react';
import config from '../../key'
import ImageContainer from '../ImageContainer/ImageContainer';
import SearchBar from '../SearchBar/SearchBar';
import Header from '../Header/Header';
import Buttons from '../Buttons/Buttons';

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

  //--------------------------------------------------------

//Aqui eu faco uma funcao para ser possivel trocar de pagina, tambem vou alterar no meu url para isso ser possivel.

let [pageNum, setPageNum] = useState(1)

//If we press the value we want to add 1 to the page number

function handleLeftClick(){
  if(pageNum !== 1){ //eu nao quero que quando eu aperte o botao conte para menos de 1 pagina
  setPageNum(pageNum -1)
}
}


function handleRightClick(){
  if(pageNum !== 10){ //aqui eu quero que troque no maximo 10 vezes de pagina
  setPageNum(pageNum + 1)
}
}

  //--------------------------------------------------------


  function handleSubmit(e) {
    e.preventDefault() //preventDefault will not refresh the page automaticamente
    console.log('hello')
    let url = 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?q='+search+'&pageNumber=1&pageSize=10&autoCorrect=true'
    console.log(url)
    fetch(url, config)
      .then(response => response.json())
      .then(response => setImageData(response.value))
      .catch(err => console.error(err));
  }

  //--------------------------------------------------------
//quando eu quero que o botao e o numero de paginas apareca so depois que eu pesquisar por imagens

let displayButtons = imageData.length ? <Buttons
handleLeftClick={handleLeftClick}
handleRightClick={handleRightClick}
pageNum={pageNum}
/> : null

//eu coloquei o html no display buttons para o ternary function
//ai eu substituo o meu html component for meu displayButtons




  return (
    <div className= 'background'>
      <Header
      />
      <SearchBar
      search={search}
      handleSearchChange={handleSearchChange}
      handleSubmit={handleSubmit}
      />
      <ImageContainer
      imageData={imageData}
      />
    {displayButtons}
      </div>
  );
}

export default App;

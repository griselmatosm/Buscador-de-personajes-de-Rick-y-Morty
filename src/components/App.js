import React, { useEffect, useState } from 'react';
import '../styles/App.css';
import Filters from './Filters';
import ChatacterList from './CharacterList';
import ChatacterDetail from './CharacterDetail';
import { fetchCharacters } from '../services/getDataFromApi';

function App() {
  const [characters, setCharacters] = useState([]);
  const [searchFilter, setSearchFilter] = useState('');

  useEffect(() => {
    fetchCharacters().then((data) => setCharacters(data));
  }, []);

  // console.log(characters);

  //event handler
  const handleInputText = (data) => {
    // console.log(data);
    setSearchFilter(data.value)
  };

  //filter and render

  const filteredCharacters = characters
  .filter(character => {
    return character.name.toUpperCase().includes(searchFilter.toUpperCase());
  })



  // console.log(searchFilter);
  

  return (
    <div className="App">
      <header className="App-header">
        <Filters handleInputText={handleInputText} value={searchFilter} />
        <ChatacterList characters={filteredCharacters} />
        <ChatacterDetail />
      </header>
    </div>
  );
}

export default App;

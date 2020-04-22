import React, { useEffect, useState } from 'react';
import '../styles/App.css';
import Filters from './Filters';
import ChatacterList from './CharacterList';
import ChatacterDetail from './CharacterDetail';
import { fetchCharacters } from '../services/getDataFromApi'

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchCharacters().then(data => setCharacters(data))
  }, []);

  // console.log(characters);
  
  
  return (
    <div className="App">
      <header className="App-header">
        <Filters />
        <ChatacterList characters={characters}/>
        <ChatacterDetail/>
      </header>
    </div>
  );
}

export default App;

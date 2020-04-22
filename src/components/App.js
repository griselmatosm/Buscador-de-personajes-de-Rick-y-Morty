import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../styles/App.css';
import logo from '../images/Rick_and_Morty.png'
import Filters from './Filters';
import ChatacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
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
    setSearchFilter(data.value);
  };

  //filter and render

  const filteredCharacters = characters.filter((character) => {
    return character.name.toUpperCase().includes(searchFilter.toUpperCase());
  });

  // console.log(searchFilter);

  //character detail with React Router

  const renderCharacterDetail = props => {
    // debugger;  
    const characterId = props.match.params.characterId;
    const foundCharacter = characters.find(char => {  
     return char.id === parseInt(characterId)}); 
     console.log(foundCharacter, characterId);
    if (foundCharacter !== undefined) {
      return <CharacterDetail character={foundCharacter} />
    }    
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Rick and Morty" title="Rick and Morty"/>
        <Filters handleInputText={handleInputText} value={searchFilter} />
      </header>
      <ChatacterList characters={filteredCharacters} />
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/character/:characterId" render={renderCharacterDetail} />
      </Switch>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../styles/App.css';
import Filters from './Filters';
import ChatacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import { fetchCharacters } from '../services/getDataFromApi';
import Header from './Header';

function App() {
  const [characters, setCharacters] = useState([]);
  const [searchFilter, setSearchFilter] = useState('');

  useEffect(() => {
    fetchCharacters().then((data) => setCharacters(data));
  }, []);


  //event handler
  const handleInputText = (data) => {
    setSearchFilter(data.value);
  };

  //filter and render

  const filteredCharacters = characters.filter((character) => {
    return character.name.toUpperCase().includes(searchFilter.toUpperCase());
  });


  //character detail with React Router

  const renderCharacterDetail = (props) => {
    // debugger;
    const characterId = props.match.params.characterId;
    const foundCharacter = characters.find((char) => {
      return char.id === characterId;
    });
    // if (foundCharacter !== undefined) {
      return <CharacterDetail character={foundCharacter} />;
    // }
  };

  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/">
          <Filters handleInputText={handleInputText} value={searchFilter} />
          <ChatacterList characters={filteredCharacters} searchFilter={searchFilter} />
        </Route>
        <Route exact path="/character/:characterId" render={renderCharacterDetail} />
      </Switch>
    </div>
  );
}

export default App;

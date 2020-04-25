import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Filters from './Filters';
import ChatacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import Footer from './Footer';
import { fetchCharacters } from '../services/getDataFromApi';
import '../styles/App.scss';

function App() {
  const [characters, setCharacters] = useState([]);
  const [searchFilter, setSearchFilter] = useState('');

  //data request to api and set state
  useEffect(() => {
    fetchCharacters().then((data) => setCharacters(data));
  }, []);

  //event handler
  const handleInputText = (data) => {
    setSearchFilter(data.value);
  };

  const handleReset = () => {
    setSearchFilter('')
  }

  //filter and render
  const filteredCharacters = characters.filter((character) => {
    return character.name.toUpperCase().includes(searchFilter.toUpperCase());
  });

  //character detail with React Router
  const renderCharacterDetail = (props) => {
    const characterId = props.match.params.characterId;
    const foundCharacter = characters.find((char) => {
      return char.id === characterId;
    });
    return <CharacterDetail character={foundCharacter} />;
  };

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Filters handleInputText={handleInputText} handleReset={handleReset} value={searchFilter} />
          <ChatacterList characters={filteredCharacters} searchFilter={searchFilter} />
        </Route>
        <Route exact path="/character/:characterId" render={renderCharacterDetail} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;

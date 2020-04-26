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
  const [statusFilter, setStatusFilter] = useState([]);

  //data request to api and set state
  useEffect(() => {
    fetchCharacters().then((data) => setCharacters(data));
  }, []);

  //event handler
  const handleFilter = (data) => {
    if (data.name === 'search') {
      setSearchFilter(data.value);
    } else if (data.name === 'status') {
      if (data.checked === true) {
        const newStatusFilter = [...statusFilter];
        newStatusFilter.push(data.value);
        setStatusFilter(newStatusFilter);
      } else {
        const newStatusFilter = [...statusFilter];
        const statusIndex = newStatusFilter.indexOf(data.value);
        newStatusFilter.splice(statusIndex, 1);
        setStatusFilter(newStatusFilter);
      }
    }
  };

  const handleReset = (data) => {
    if (data === 'search-close') {
      setSearchFilter('');
    } else {
      setSearchFilter('');
      setStatusFilter([]);
    }
  };

  //filter and render
  const filteredCharacters = characters
    .filter((character) => {
      return character.name.toUpperCase().includes(searchFilter.toUpperCase());
    })
    .filter((character) => {
      if (statusFilter.length === 0) {
        return true;
      } else {
        return statusFilter.includes(character.status);
      }
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
          <Filters handleFilter={handleFilter} handleReset={handleReset} valueSearch={searchFilter} valueStatus={statusFilter} />
          <ChatacterList characters={filteredCharacters} searchFilter={searchFilter} />
        </Route>
        <Route exact path="/character/:characterId" render={renderCharacterDetail} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

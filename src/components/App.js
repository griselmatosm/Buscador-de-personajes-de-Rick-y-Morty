import React from 'react';
import '../styles/App.css';
import Filters from './Filters';
import ChatacterList from './CharacterList';
import ChatacterDetail from './CharacterDetail';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Filters/>
        <ChatacterList/>
        <ChatacterDetail/>
      </header>
    </div>
  );
}

export default App;

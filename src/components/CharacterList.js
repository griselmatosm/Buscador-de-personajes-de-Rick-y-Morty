import React from 'react';
import ChatacterCard from './CharacterCard';
import '../styles/CharacterList.css';

function ChatacterList(props) {
  let chatacterList = props.characters.map((character) => {
  return <ChatacterCard key={character.id} character={character} />   
  });

  return (
    <ul className="ChatacterList">
      {chatacterList}
    </ul>
  );
}

export default ChatacterList;

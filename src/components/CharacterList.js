import React from 'react';
import ChatacterCard from './CharacterCard';
import '../styles/CharacterList.css';

function CharacterList(props) {
  console.log(props);

  let characterList = props.characters.map((character) => {
    return <ChatacterCard key={character.id} character={character} />;
  });
  console.log(characterList);
  if (characterList.length > 0) {
    return <ul className="CharacterList">{characterList}</ul>;
  } else {
  return <p>No hay ningún personaje que coincida con la palabra {props.searchFilter}</p>;
  }
}

export default CharacterList;

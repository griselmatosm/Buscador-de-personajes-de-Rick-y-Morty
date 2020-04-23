import React from 'react';
import PropTypes from 'prop-types';
import CharacterCard from './CharacterCard';
import '../styles/CharacterList.css';

function CharacterList(props) {

  let characterList = props.characters.map((character) => {
    return <CharacterCard key={character.id} character={character} />;
  });

  if (characterList.length > 0) {
    return <ul className="CharacterList">{characterList}</ul>;
  } else {
    return <p>No hay ningún personaje que coincida con la palabra {props.searchFilter}</p>;
  }
}

// Aquí defino las propTypes
CharacterList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object)
};

export default CharacterList;

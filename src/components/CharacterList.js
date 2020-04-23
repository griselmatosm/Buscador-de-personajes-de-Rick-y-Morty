import React from 'react';
import PropTypes from 'prop-types';
import CharacterCard from './CharacterCard';
import '../styles/CharacterList.css';

function CharacterList(props) {
  let characterList = props.characters.map((character) => {
    return <CharacterCard key={character.id} character={character} />;
  });

  if (characterList.length > 0) {
    return (
      <section className="CharacterList-section">
        <ul className="CharacterList">{characterList}</ul>
      </section>
    );
  } else {
    return (
      <div className="CharacterList-notfound">
        <p>There is no any character that matches with the word </p>
        <span className="CharacterList-notfound-word"> {props.searchFilter}</span>
      </div>
    );
  }
}

// Aquí defino las propTypes
CharacterList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object),
};

export default CharacterList;

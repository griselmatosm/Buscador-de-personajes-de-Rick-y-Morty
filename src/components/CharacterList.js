import React from 'react';
import PropTypes from 'prop-types';
import CharacterCard from './CharacterCard';
import '../styles/CharacterList.scss';

function CharacterList(props) {
  let characterList = props.characters.map((character) => {
    return <CharacterCard key={character.id} character={character} />;
  });

  //if the word writed not match with any name in the array of characters, characterList return an empty array, in that case will be painted on screen a message showing that are not coincidences with the word typed

  if (characterList.length > 0) {
    return (
      <section className="CharacterList-section">
        <ul className="CharacterList">{characterList}</ul>
      </section>
    );
  } else {
    return (
      <section className="CharacterList-section">
        <div className="CharacterList__notfound">
          <p>There is no any character that matches with the word </p>
          <span className="CharacterList__notfound--word"> "{props.searchFilter}"</span>
        </div>
      </section>
    );
  }
}

//defining propTypes
CharacterList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object),
};

export default CharacterList;

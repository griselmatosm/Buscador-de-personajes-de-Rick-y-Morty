import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/CharacterCard.css';

function CharacterCard(props) {
  // console.log(props.character);
  return (
    <Link to={`/character/${props.character.id}`}>
      <li className="ChatacterCard">
        <img className="CharacterCard-image" src={props.character.image} alt={`Foto de ${props.character.name}`} title={`Foto de ${props.character.name}`} />
        <h3 className="CharacterCard-name">{props.character.name}</h3>
        <p className="CharacterCard-species">{props.character.species}</p>
      </li>
    </Link>
  );
}

// Aquí defino las propTypes
CharacterCard.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    species: PropTypes.string
  })
};

export default CharacterCard;

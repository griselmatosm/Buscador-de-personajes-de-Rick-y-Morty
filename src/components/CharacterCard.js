import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/CharacterCard.scss';

function CharacterCard(props) {
  return (
    <Link to={`/character/${props.character.id}`}>
      <li className="CharacterCard">
        <img className="CharacterCard__image" src={props.character.image} alt={props.character.name} title={`Picture of ${props.character.name}`} />
        <h3 className="CharacterCard__name">{props.character.name}</h3>
        <p className="CharacterCard__species">{props.character.species}</p>
      </li>
    </Link>
  );
}

//defining propTypes
CharacterCard.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    species: PropTypes.string,
  }),
};

export default CharacterCard;

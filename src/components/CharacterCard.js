import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/CharacterCard.scss';

function CharacterCard(props) {
  return (
    <Link to={`/character/${props.character.id}`}>
      <li className="CharacterCard">
        <img className="CharacterCard__image" src={props.character.image} alt={props.character.name} title={`Picture of ${props.character.name}`} />
        <div className="CharacterCard__info">
          <h3 className="CharacterCard__name">{props.character.name}</h3>
          <p className="CharacterCard__species">{props.character.species}</p>
          <p className="CharacterCard__status">{props.character.status === 'Alive' ? <i className="fas fa-heart"></i> : props.character.status === 'Dead' ? <i className="fas fa-skull-crossbones"></i> : <i className="fas fa-question"></i>}</p>
        </div>
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

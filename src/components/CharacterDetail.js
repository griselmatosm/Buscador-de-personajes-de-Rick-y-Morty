import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/CharacterDetail.css';

function CharacterDetail(props) {
  
  if (props.character === undefined) {
    return (
      <div className="CharacterDetail">
        <Link className="Character-link" to="/"> Back </Link>
        <div className="Character-info">
          <p>Character not found</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="CharacterDetail">
        <Link className="Character-link" to="/"> Back <i class="fas fa-chevron-circle-left"></i> </Link>
        <div className="Character-info">
          <img className="Character-image" src={props.character.image} alt={`Foto de ${props.character.name}`} />
          <div>
            <h3>{props.character.name}</h3>
            <p>Status: {props.character.status}</p>
            <p>Species: {props.character.species}</p>
            <p>Origin: {props.character.planet}</p>
            <p>Episodes: {props.character.episodes}</p>
          </div>
        </div>
      </div>
    );
  }
}

// Aquí defino las propTypes
CharacterDetail.propTypes = {
  character: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    species: PropTypes.string,
    status: PropTypes.string,
    planet: PropTypes.string,
    episodes: PropTypes.number
  })
};


export default CharacterDetail;

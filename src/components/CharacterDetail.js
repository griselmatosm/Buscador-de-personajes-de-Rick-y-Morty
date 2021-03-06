import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/CharacterDetail.scss';

function CharacterDetail(props) {
  //if there is no character found, it will be showing a message suggesting that the character requested it doesn't exist
  if (props.character === undefined) {
    return (
      <div className="CharacterDetail">
        <Link className="CharacterDetail__link" to="/">
          Back <i className="fas fa-chevron-circle-left"></i>
        </Link>
        <div className="CharacterDetail__info--notFound">
          <img className="notFound-message" src="https://fontmeme.com/permalink/200423/8c91dbb30799b4d9be208a09e5ecf9b4.png" alt="fuente-senyum-sokmo-deh" border="0" />
          <img src="https://img.icons8.com/cute-clipart/64/000000/nothing-found.png" alt="Character not found" />
        </div>
      </div>
    );
  } else {
    return (
      <div className="CharacterDetail">
        <Link className="CharacterDetail__link" to="/">
          Back <i className="fas fa-chevron-circle-left"></i>
        </Link>
        <div className="CharacterDetail__info">
          <img className="CharacterDetail__image" src={props.character.image} alt={`Foto de ${props.character.name}`} />
          <div>
            <h3>{props.character.name}</h3>
            {/* check status and species types and paint an icon in correspondence */}
            <p>Status: {props.character.status === 'Alive' ? <i className="fas fa-heart"></i> : props.character.status === 'Dead' ? <i className="fas fa-skull-crossbones"></i> : <i className="fas fa-question"></i>}</p>
            <p>Species: {props.character.species === 'Alien' ? <i className="fab fa-reddit-alien"></i> : <i className="fas fa-user-alt"></i>}</p>
            <p>Origin: {props.character.planet}</p>
            <p>Episodes: {props.character.episodes}</p>
          </div>
        </div>
      </div>
    );
  }
}

//defining propTypes
CharacterDetail.propTypes = {
  character: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    species: PropTypes.string,
    status: PropTypes.string,
    planet: PropTypes.string,
    episodes: PropTypes.number,
  }),
};

export default CharacterDetail;

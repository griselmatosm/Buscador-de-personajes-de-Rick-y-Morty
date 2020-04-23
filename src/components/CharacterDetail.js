import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CharacterDetail.css';

function CharacterDetail(props) {
  if (props.character === undefined) {
    return (
      <div className="CharacterDetail">
        <Link className="Character-link" to="/"> Volver </Link>
        <div className="Character-info">
          <p>Personaje no encontrado</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="CharacterDetail">
        <Link className="Character-link" to="/"> Volver </Link>
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

export default CharacterDetail;

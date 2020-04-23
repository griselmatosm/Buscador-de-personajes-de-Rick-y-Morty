import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CharacterCard.css';

function ChatacterCard(props) {
  return (
    <Link to={`/character/${props.character.id}`}>
      <li className="ChatacterCard">
        <img className="CharacterCard-image" src={props.character.image} alt={`Foto de ${props.character.name}`} />
        <h3 className="CharacterCard-name">{props.character.name}</h3>
        <p className="CharacterCard-species">{props.character.species}</p>
      </li>
    </Link>
  );
}

export default ChatacterCard;

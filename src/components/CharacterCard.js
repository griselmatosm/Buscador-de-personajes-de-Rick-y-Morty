import React from 'react';
import { Link } from 'react-router-dom';

function ChatacterCard(props) {
  // console.log(props.character);
  
  return (
    <li className="ChatacterCard">
      <Link to={`/character/${props.character.id}`}>
        <img src={props.character.image} alt={`Foto de ${props.character.name}`} />
        <h3>{props.character.name}</h3>
        <p>{props.character.species}</p>
      </Link>
    </li>
  );
}

export default ChatacterCard;

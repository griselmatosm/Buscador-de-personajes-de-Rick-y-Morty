import React from 'react';

function ChatacterCard(props) {
  
  return (
    <li className="ChatacterCard">
      <img src={props.character.image} alt={`Foto de ${props.character.name}`} />
      <h3>{props.character.name}</h3>
      <p>{props.character.species}</p>
    </li>
  );
}

export default ChatacterCard;

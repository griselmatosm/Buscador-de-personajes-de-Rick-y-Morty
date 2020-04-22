import React from 'react';
import { Link } from 'react-router-dom';

function ChatacterDetail(props) {
  console.log(props);

  return (
    <div className="ChatacterDetail">
      <Link to="/"> Volver </Link>
      <img src={props.character.image} alt={`Foto de ${props.character.name}`} />
      <h3>{props.character.name}</h3>
      <p>Status: {props.character.status}</p>
      <p>Species: {props.character.species}</p>
      <p>Origin: {props.character.planet}</p>
      <p>Episodes: {props.character.episodes}</p>
    </div>
  );
}

export default ChatacterDetail;

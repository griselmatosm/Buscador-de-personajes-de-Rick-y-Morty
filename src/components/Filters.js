import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Filters.css';

function Filters(props) {
  // console.log(props);
  
const handleInputText = (ev) => {
  ev.preventDefault();
  const data = {
    name: 'search',
    value: ev.target.value    
  }
  props.handleInputText(data)
}

//evito que se envíe el formulario al presionar la tecla intro
const handleSubmit = ev => {
  ev.preventDefault();
}

  return (
    <form className="Filters" onSubmit={handleSubmit}>
      <label>
        <input className="filter-text" type="text" placeholder="Introduce el nombre de un personaje" name="search" value={props.value} onChange={handleInputText}/>
      </label>    
    </form>
  );
}

// Aquí defino las propTypes
Filters.propTypes = {
  value: PropTypes.string
};

export default Filters;

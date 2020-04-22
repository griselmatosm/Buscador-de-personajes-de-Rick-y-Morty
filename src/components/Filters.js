import React from 'react';

function Filters(props) {
  // console.log(props);
  
const handleInputText = (ev) => {
  const data = {
    name: 'search',
    value: ev.target.value    
  }
  props.handleInputText(data)
}

  return (
    <form className="Filters">
      <label>
        <input type="text" placeholder="Introduce el nombre de tu personaje favorito" name="search" value={props.value} onChange={handleInputText}/>
      </label>
    
    </form>
  );
}

export default Filters;

import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Filters.scss';

function Filters(props) {
  const handleInputText = (ev) => {
    ev.preventDefault();
    const data = {
      name: 'search',
      value: ev.target.value,
    };
    props.handleInputText(data);
  };

  //avoid submitting form when enter key is press
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  const handleReset = () => {
    props.handleReset();
  };

  return (
    <form className="Filter" onSubmit={handleSubmit}>
      <label>
        <input className="Filter__text" type="text" placeholder="Search a character" name="search" value={props.value} onChange={handleInputText} />
      </label>
      <div className="Filter__close" onClick={handleReset}>
        <i className="fas fa-times-circle"> </i>
      </div>
    </form>
  );
}

//defining propTypes
Filters.propTypes = {
  value: PropTypes.string,
};

export default Filters;

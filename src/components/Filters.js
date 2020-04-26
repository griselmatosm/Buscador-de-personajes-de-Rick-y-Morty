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
    props.handleFilter(data);
  };

  //avoid submitting form when enter key is press
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  const handleReset = (ev) => {
    props.handleReset(ev.currentTarget.id);
  };

  const handleCheck = (ev) => {
    const data = {
      name: 'status',
      checked: ev.target.checked,
      value: ev.target.value,
    };
    props.handleFilter(data);
  };

  return (
    <form className="Filter" onSubmit={handleSubmit}>
      <div className="Filter__search">
        <label>
          <input className="Filter__search--text" type="text" placeholder="Search a character" name="search" value={props.valueSearch} onChange={handleInputText} />
        </label>
        <div className="Filter__search--close" id="search-close" onClick={handleReset}>
          <i className="fas fa-times-circle"> </i>
        </div>
      </div>
      <fieldset className="Filter__status">
        <legend>Your character's status is:</legend>
        <label className="Filter__status--label" htmlFor="alive">
          <input type="checkbox" name="alive" value="Alive" checked={props.valueStatus.includes('Alive')} onChange={handleCheck} />
          Alive
        </label>
        <label className="Filter__status--label" htmlFor="dead">
          <input type="checkbox" name="dead" value="Dead" checked={props.valueStatus.includes('Dead')} onChange={handleCheck} />
          Dead
        </label>
        <label className="Filter__status--label" htmlFor="unknown">
          <input type="checkbox" name="unknown" value="unknown" checked={props.valueStatus.includes('unknown')} onChange={handleCheck} />
          Unknown
        </label>
      </fieldset>
      <button className="Filter__reset" id="button-reset" onClick={handleReset}>
        Reset
      </button>
    </form>
  );
}

//defining propTypes
Filters.propTypes = {
  value: PropTypes.string,
};

export default Filters;

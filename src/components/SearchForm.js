import React from 'react';

const SearchForm = (props) => {
  return (
    <form onSubmit={props.handleFormSubmit}>
      <div className="input-field">
        <input placeholder='search by keyword...' name="searchInput" type="text" value={props.searchInputValue} onChange={props.handleInputChange}/>
      </div>
      <button type='submit' className="waves-effect waves-light btn" onSubmit={props.handleFormSubmit}>Search</button>
    </form>
  )
}

export default SearchForm;
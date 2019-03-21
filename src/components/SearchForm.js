import React from 'react';

const SearchForm = ({ handleFormSubmit, handleInputChange, searchInputValue }) => {
  return (
    <form onSubmit={handleFormSubmit}>
      <div className="input-field">
        <input placeholder='search by keyword...' name="searchInput" type="text" value={searchInputValue} onChange={handleInputChange}/>
      </div>
      <button type='submit' className="waves-effect waves-light btn" onSubmit={handleFormSubmit}>Search</button>
    </form>
  )
}

export default SearchForm;
import React from 'react';
import { useState } from 'react';
const Search = ({ handleSearch }) => {
  const [query, setQuery] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    handleSearch(query);
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className='searchBar'>
      <form>
        <input type='text' name='moviename' placeholder='search' value={query} onChange={handleChange}></input>
        <button type='submit' onClick={handleClick}>Go!</button>
      </form>
    </div>);


};
export default Search;
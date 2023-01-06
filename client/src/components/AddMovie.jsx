import React from 'react';
import { useState } from 'react';

const AddMovie = ({ handleAddMovie }) => {
  const [query, setQuery] = useState('');
  const handleClick = (e) => {
    e.preventDefault();
    handleAddMovie(query);
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <form>
        <input type='text' name='moviename' placeholder='Add movie title here' value={query} onChange={handleChange}></input>
        <button type='submit' onClick={handleClick}>Add</button>
      </form>
    </div>);

};


export default AddMovie;


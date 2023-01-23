import React from 'react';
import MovieItem from './MovieItem.jsx';

const MovieList = ({ items, toggleItemWatched, handleDelete }) => {
  return (
    <div className='movieList'>
      {items.map((item, index) => {
        return <MovieItem item={item} key={index} toggleItemWatched={toggleItemWatched} handleDelete={handleDelete} />;
      })}
    </div>
  );

}

export default MovieList;
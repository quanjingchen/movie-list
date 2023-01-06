import React from 'react';
import MovieItem from './MovieItem.jsx';

const MovieList = ({ items, handleItemWatched }) => {
  return (
    <div className='movieList'>
      {items.map((item, index) => {
        return <MovieItem item={item} key={index} handleItemWatched={handleItemWatched} />;
      })}
    </div>
  );

}

export default MovieList;
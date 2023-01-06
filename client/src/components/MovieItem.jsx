import React from 'react';

const MovieItem = ({ item, handleItemWatched }) => {

  const handleClick = () => {
    console.log('clicked: ', item.title, item.watched);
    handleItemWatched(item.title);
  };

  var bgColor = item.watched ? 'green' : 'white';
  return (
    <div className='item'>
      <div className='item-title'>
        {item.title}
      </div>
      <button className='btn-watched' movietitle={item.title} style={{ backgroundColor: bgColor }} onClick={handleClick}>Watched</button>
    </div>
  );

}

export default MovieItem;
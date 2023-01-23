import React from 'react';
import { FaTrash } from 'react-icons/fa';



const MovieItem = ({ item, toggleItemWatched,  handleDelete}) => {

  const handleClick = () => {
    console.log('clicked toggle watched: ', item.title, item.watched);
    toggleItemWatched(item);
  };

  const handleRemove = () => {
    console.log('clicked delete: ', item.title, item.watched);
    handleDelete(item);
  }

  var bgColor = item.watched ? 'green' : 'white';
  return (
    <div className='item'>
      <div className='item-title'>
        {item.title}
      </div>
      <FaTrash className='fa-trash' onClick={handleRemove}/>

      <button className='btn-watched' movietitle={item.title} style={{ backgroundColor: bgColor }} onClick={handleClick}>Watched</button>
    </div>
  );

}

export default MovieItem;
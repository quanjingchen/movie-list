import React from 'react';
import data from './data.js';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
import SearchAlert from './SearchAlert.jsx';
import AddMovie from './AddMovie.jsx';

import { useState } from 'react';


const App = (props) => {

  const [movies, setMovies] = useState([...data]);
  const [items, setItems] = useState([...data]);
  const [isFound, setIsFound] = useState(true);
  const [showWatched, setShowWatched] = useState();

  const handleItemWatched = (title) => {
    console.log('handleItemWatched: ', title);
    for (var i = 0; i < movies.length; i++) {
      var tmp = movies[i];
      if (tmp.title === title) {
        tmp.watched = !tmp.watched;
      }
    }
    setMovies([...movies]);
    handleShowWatched(showWatched);
  };


  const handleShowWatched = (show) => {
    if (show === true) {
      setShowWatched(true);
      var newItems = movies.filter( item => item.watched === true );
    } else if (show === false) {
      setShowWatched(false);
      var newItems = movies.filter( item => item.watched === false );
    } else {
      var newItems = [...movies];
    }
    setItems(newItems);
  };

  const handleSearch = (query) => {
    // console.log('query: ', query);
    // console.log('movies: ', movies);
    // console.log('items: ', items);

    var newItems = movies.filter(item => {
      var title = item.title.split(" ").join("").toLowerCase();
      var q = query.split(" ").join("").toLowerCase();
      return title.includes(q);
    });
    if (newItems.length > 0) {
      setIsFound(true);
    } else {
      setIsFound(false);
    }
    setItems(newItems);
  };

  const handleAddMovie = (query) => {
    var newMovie = { title: query, watched: false };
    console.log('added: ', newMovie);
    setMovies([...movies, newMovie]);
    setItems([...items, newMovie]);
  };

  return (
    <div>
      <div>
      <AddMovie handleAddMovie={handleAddMovie} />
      <Search handleSearch={handleSearch} />
      </div>

      <div>
        <button className='btn-watch-list' style={{ backgroundColor: 'green' }} onClick={() => handleShowWatched(true)}>Watched</button>
        <button className='btn-watch-list' onClick={() => handleShowWatched(false)}>To Watch</button>
      </div>
      {!isFound ? <SearchAlert /> : null}
      <div>
        <MovieList items={items} handleItemWatched={handleItemWatched} />
      </div>
    </div>

  );
};

export default App;
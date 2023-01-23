import React, { useState, useEffect }  from 'react';
import axios from 'axios';

// import data from './data.js';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
import SearchAlert from './SearchAlert.jsx';
import AddMovie from './AddMovie.jsx';



const App = (props) => {


  const [movies, setMovies] = useState([]);
  const [items, setItems] = useState([]);
  const [isFound, setIsFound] = useState(true);
  const [listOption, setListOption] = useState('All');
  const url = 'http://127.0.0.1:3000/movies';

  const handleGet = () => {
    axios.get(url)
      .then(res => {
        setMovies([...res.data]);
        handleListOption([...res.data]);
      })
      .catch(error => console.log(error))
  };

  const handlePost = (data, callback) => {
    axios.post(url, data)
      .then(res => {
        callback(null, res);
      })
      .catch(error => console.log(error))
  };

  const handleDelete = (movie) => {
    axios.delete(url, {
      data:movie
    })
      .then(res => {
        console.log(res);
        console.log('delete movie: ', movie);
        handleGet();
      })
      .catch(error => console.log(error))
  };


  useEffect(handleGet, []);

  useEffect(() => {
    console.log('useEffect');
    handleListOption(movies)}
    , [listOption]);

  const toggleItemWatched = (movie) => {
    axios.put(url, movie)
      .then(() => {
        console.log('update movie: ', movie);
        handleGet();
      })
      .catch(error => console.log(error))
  };

  const handleListOption = (data) => {
    console.log('listOption: ', listOption);
    if (listOption === 'Watched') {
      var newItems = data.filter(item => item.watched === 1);
    } else if (listOption === 'ToWatch') {
      var newItems = data.filter(item => item.watched === 0);
    } else {
      var newItems = [...data];
    }
    setItems([...newItems]);
  };

  const handleSearch = (query) => {
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
    // var newMovie = { ...query };
    console.log('added: ', query);
    var newMovie = {};
    newMovie.title = query.title;
    newMovie.url = 'https://image.tmdb.org/t/p/w500' + query.poster_path || 'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie-1-1-150x150.jpg';
    newMovie.release_date = query.release_date || 'Unknown';
    newMovie.vote_average = query.vote_average || 0;
    newMovie.vote_count = query.vote_count || 0;
    newMovie.overview = query.overview || 'Unknown';
    handlePost(newMovie, (err, data) => {
      console.log(data);
      handleGet();
    });
  };

  return (
    <div>
      <div>
        <AddMovie handleAddMovie={handleAddMovie} />
        <Search handleSearch={handleSearch} />
      </div>

      <div>
        <button className='btn-watch-list' onClick={() => setListOption('All')}>All</button>
        <button className='btn-watch-list' style={{ backgroundColor: 'green' }} onClick={() => setListOption('Watched')}>Watched</button>
        <button className='btn-watch-list' style={{ backgroundColor: 'grey' }} onClick={() => setListOption('ToWatch')}>To Watch</button>

      </div>
      {!isFound ? <SearchAlert /> : null}
      <div>
        <MovieList items={items} toggleItemWatched={toggleItemWatched} handleDelete={handleDelete}/>
      </div>
    </div>

  );
};

export default App;
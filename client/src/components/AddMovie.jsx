import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { MOVIEDB_KEY } from '../config/config.js';


const AddMovie = ({ handleAddMovie }) => {
  const [formData, setFormData] = useState({
    title: '',
    watched: 0
  });

  const [searchResult, setSearchResult] = useState([]);

  const [showSearch, setShowSearch] = useState(false);


  const searchAPI = (query, callback) => {
    var encodedQuery = encodeURIComponent(query);
    var url = `https://api.themoviedb.org/3/search/movie?api_key=${MOVIEDB_KEY}&query=${encodedQuery}`;
    axios.get(url)
      .then(res => {
        callback(null, res.data.results);
        // setMovies([...res.data]);
        // setItems([...res.data]);
      })
      .catch(error => console.log(error))
  };

  const handleChange = (e) => {
    // console.log('HANLE CHANGE: ', e.target.name, e.target.value);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchAPI(formData.title, (err, data) => {
      var titles = data.map(item => item.title);
      setSearchResult([...data.slice(0, 5)]);
      setShowSearch(true);
    });

    // handleAddMovie(formData);
  };

  const handleClick = (item) => {
    setShowSearch(false);
    handleAddMovie(item);
  };



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' name='title' placeholder='Add movie title here' value={formData.title} onChange={handleChange}></input>
        <button type='submit'>Add</button>
      </form>
      {showSearch? searchResult.map((item, index) => {
        return <div className='searchResult' key={index} onClick={() => handleClick(item)}>{item.title}</div>;
        }) : null}
      <div></div>
    </div>);

};


export default AddMovie;


var db = require('../db');
module.exports = {
  getAll: function (callback) {
    console.log('IM IN MODELS GETALL');
    var queryString = ' SELECT * FROM movies; ';
    db.query(queryString, (err, result) => {
      callback(err, result);
    });
  }, // a function which produces all the messages

  create: function (movie, callback) {
    console.log('IM IN MODELS CREATE');
    var queryString = ' INSERT INTO movies (title, url, release_date, vote_average, vote_count, overview) VALUES (?, ?, ?, ?, ?, ?)';
    var params = Object.values(movie);
    // console.log('params', params);
    db.query(queryString, params, function(err, result) {
      callback(err, result);
    })
  },

  update: function (movie, callback) {
    console.log('IM IN MODELS UPDATE');
    var queryString = `UPDATE movies SET watched = ${ movie.watched === 1? 0 : 1 } WHERE title = (?)`;
    var params = [movie.title];
    db.query(queryString, params, function(err, result) {
      callback(err, result);
    })
  },

  remove: function (movie, callback) {
    console.log('IM IN MODELS REMOVE');
    var queryString = `DELETE FROM movies WHERE title = (?)`;
    console.log(queryString);
    var params = [movie.title];
    console.log(params);
    db.query(queryString, params, function(err, result) {
      callback(err, result);
    })
  }

}
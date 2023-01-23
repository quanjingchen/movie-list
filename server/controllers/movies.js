var models = require('../models');
module.exports = { // a function which handles a get request for all movies
  get: function (req, res) {
    // console.log('getting data');
    models.movies.getAll((err, movies) => {
      if (err) {
        res.sendStatus(404);
        console.log('error with getting movies: ', err);
      } else {
        res.status(200).json(movies);
        // console.log('getting movies: ', movies);
      }
    });
  },
  post: function (req, res) {
    models.movies.create(req.body, (err) => {
      if (err) {
        console.log('error with getting movies: ', err);
        res.sendStatus(400);
      } else {
        console.log('Data received!');
        // res.sendStatus(201);
        res.status(201).send('Data received!');
      }
    });
  },

  put: function (req, res) {
    models.movies.update(req.body, (err) => {
      if (err) {
        console.log('error with updating movies: ', err);
        res.sendStatus(400);
      } else {
        res.status(200).send('Data updated!');
      }
    });
  },

  delete: function (req, res) {
    console.log('SHOW ME REQ BODY', req.body);
    models.movies.remove(req.body, (err, result) => {
      if (err) {
        console.log('error with deleting movies: ', err);
        res.sendStatus(405);
      } else {
        console.log('succesfully deleting movies: ', result);
        res.status(202).send('Data deleted!');
      }
    })
  }





}
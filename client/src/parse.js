import axios from 'axios';
module.exports = {

  server: `http://127.0.0.1:3000/movies`,

  create: function(query, successCB, errorCB = null) {

    console.log('post a movie in client', query);

    $.ajax({
      url: this.server,
      type: 'POST',
      data: JSON.stringify(movie),
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function (error) {
        console.error('movielist: Failed to create a movie', error);
      }
    });
  },

  readAll: function(successCB, errorCB = null) {
    axios.get(this.server)
    .then()
    .catch()
  }
};


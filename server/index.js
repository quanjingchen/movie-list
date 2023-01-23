const express = require('express');
const path = require('path');
var db = require('./db');
const controller = require('./controllers');

// Middleware
var morgan = require('morgan');
var cors = require('cors');

const app = express();
const PORT = 3000 || process.env.PORT;

// Logging and parsing
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use(express.static(__dirname + '/../client/dist'));
// app.get('/movies', (req, res) => {
//   console.log('GET REQUEST RECEIVED AT /');
//   console.log(path.join(__dirname + '/../client/dist/index.html'));
//   // res.sendFile(path.join(__dirname + '/../client/dist/index.html'))
// });

app.get('/movies', controller.movies.get);

app.post('/movies', controller.movies.post);

app.put('/movies', controller.movies.put);

app.delete('/movies', controller.movies.delete);


app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})


  // console.log('Request headers:', req.headers);
  // console.log('Request query:', req.query);
  // console.log('Request body:', req.body);
  // res.sendFile(path.join(__dirname + '/../client/dist/index.html'));


//Serve the client files


// app.get('/', controller.movies.get);
const express = require('express');
const app = express();

const { config } = require('./config/index');
const moviesApi = require('./routes/movies.js');
const userMoviesApi = require('./routes/userMovies');

const {
  logErrors, 
  wrapErrors,
  errorHandler
} = require ('./utils/middleware/errorHandlers.js');

const notFoundHandler = require('./utils/middleware/notFoundHandler');
// app.get('/', function(req, res) {
//   res.send('hello world');
// });

// app.get('/json', function(req, res) {
//   res.json({ hello: 'world' });
// });

// middleware body parser
app.use(express.json());

// routes
moviesApi(app);
userMoviesApi(app);

// catch 404
app.use(notFoundHandler);

// errors middleware
// los middleware de error tienen que ir al final de las rutas, las rutas también son middleware
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, function() {
  console.log(`Listening http://localhost:${config.port}`)
});
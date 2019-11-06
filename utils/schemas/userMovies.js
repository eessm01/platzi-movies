// nos permite tener el formato correcto cuando llamemos a nuestros endpoints
const joi = require('@hapi/joi');

const { movieIdSchema } = require('./movies');
const { userIdSchema } = require('./users');

//formato de id de mongo
const userMovieIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);

const createUserMovieSchema = {
  userId: userIdSchema, 
  movieId: movieIdSchema
};

module.exports = {
  userMovieIdSchema, 
  createUserMovieSchema
};
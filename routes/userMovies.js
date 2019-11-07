// lib for create route
const express = require('express');

// services
const UserMoviesServices = require('../services/userMovies');

// validation schemas
const validationHandler = require('../utils/middleware/validationHandler');

// schemas
const { movieIdSchema } = require('../utils/schemas/movies');
const { userIdSchema } = require('../utils/schemas/users');
const { createUserMovieSchema } = require('../utils/schemas/userMovies');

function userMoviesApi(app) {
  const router = express.Router();
  app.use('/api/user-movies', router);

  const userMoviesService = new UserMoviesServices();

  router.get(
    '/',
    validationHandler({ userId: userIdSchema }, 'query'),
    async function(req, res, next) {
      const { userId } = req.query;

      try {
        const userMovies = await userMoviesService.getUserMovies({ userId });
        
        res.status(200).json({
          data: userMovies,
          message: 'user movies listed'
        });
      } catch (error) {
        next(error);
      }
    }
  );

  router.post('/', validationHandler(createUserMovieSchema), async function(req, res, next) {
    const { body: userMovie } = req;

    try {
      const createdUserMovieId = await userMoviesService.createUserMovie({
        userMovie
      });

      res.status(201).json({
        data: createdUserMovieId,
        message: 'user movie created'
      });
    } catch(error) {
      next(error);
    }
  });

  router.delete('/:userMovieId', validationHandler({ userMovieid: movieIdSchema}, 'params'), async function(req, res, next) {
    const { userMovieId } = req.params;

    try {
      const deleteUserMovieId = await userMoviesService.deleteUserMovieId({
        userMovieId
      });

      res.status(200).json({
        data: deleteUserMovieId, 
        message: 'user movie deleted'
      })

    } catch(error) {
      next(error);
    }
  })
}

module.exports = userMoviesApi;
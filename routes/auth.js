const express = require('express');
const passport = require('passport');
const boom = require('@hapi/boom');
const jwt = require('jsonwebtoken');
const ApiKeysService = require('../services/apiKeys');
// lo usaremos para crear usuarios
const UsersServices = require('../services/users'); 
const validationHandler = require('../utils/middleware/validationHandler');
const { config } = require('../config');

// importamos esquemas
const { createUserSchema } = require('../utils/schemas/users');

// Basic Strategy
require('../utils/auth/strategies/basic');

function authApi(app) {
  const router = express.Router();
  app.use('/api/auth', router);

  const apiKeysService = new ApiKeysService();
  const userService = new UsersServices();

  router.post('/sign-in', async function(req, res, next) {
    // token que determina que clases de permisos tendrá, vendra del request
    const { apiKeyToken } = req.body;  

    // verificamos la existencia del token, de lo contrario notificamos
    if(!apiKeyToken) {
      next(boom.unauthorized('apiKeyToken is required'));
    }

    // si el token existe, entonces autenticamos, 
    // lo que buscamos es q nos devuelva un token firmado
    passport.authenticate('basic', function(error, user){
      try {
        // por alguna razón el usuario no fue encontrado
        if (error || !user) {
          next(boom.unauthorized());
        }

        // si no hay error implementamos el login
        // vamos a definir que no vamos a manejar una sesión
        req.login(user, { session: false }, async function(error) {
          // recibe un error si es que se presenta
          if(error) {
            next(error);
          }

          // si todo va bien, buscamos apikey en bd usando el service
          const apiKey = await apiKeysService.getApiKey( { token: apiKeyToken });

          if(!apiKey) {
            // si existe un error al buscar el token en bd
            next(boom.unauthorized);
          }

          // si sí tenemos el apiKey construimos el JWT
          const { _id: id, name, email } = user;


          const payload = {
            sub: id,
            name,
            email,
            // la importancia del apiToken, aquí se define que son los scopes que vienen del servicio 
            scopes: apiKey.scopes 
          }

          const token = jwt.sign(payload, config.authJwtSecret, {
            // expira en 15 min
            expiresIn: '15m'
          });

          // y respondemos un estatus 200 con el token y el usuario
          return res.status(200).json({ token, user: { id, name, email } });
        })
      } catch(error) {
        next(error);
      }
      // como es un custom Callback, debemos hace un Clousure con la firma de la ruta.
    })(req, res, next); 
  });


  // implementación de creación de usuarios
  router.post('/sign-up', validationHandler(createUserSchema), async function(req, res, next) {
    const { body: user } = req;

    try {
      // recordemos que este servicio se encarga de tomar el password, hacer hash con él e insertarlo en la BD
      const createdUserId = await userService.createUser({ user });

      res.status(201).json({
        data: createdUserId,
        message: 'User created'
      });
    } catch(error) {
      next(error);
    }

  });
}

module.exports = authApi;
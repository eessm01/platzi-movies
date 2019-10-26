const boom = require('@hapi/boom');
const { config } = require('../../config');
// express determina si es un middleware es con los 4 parámetros err, req, res, next


// función de ayuda
function withErrorStack(error, stack) {
  if (config.dev) {
    return { ...error, stack }
  }
  return error;
}

// middleware
function logErrors(err, req, res, next) {
  console.log(err);
  next(err);
}

//middleware
function wrapErrors(err, req, res, next){
  if (!err.idBoom){
    next(boom.badImplementation(err));
  }
}

// middleware
function errorHandler(err, req, res, next) { // eslint-disable-line
  const { output: { statusCode, payload } } = err;
  res.status(statusCode);
  res.json(withErrorStack(payload, err.stack));
}

module.exports = {
  logErrors,
  wrapErrors,
  errorHandler
}
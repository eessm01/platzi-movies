const boom = require('@hapi/boom');

function notFoundHandler(req, res) { // no se necesita el next, porque es el último middleware q se ejecuta
  const {
    output: { statusCode, payload }
  } = boom.notFound();

  res.status(statusCode).json(payload);
}

module.exports = notFoundHandler;
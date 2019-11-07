const passport = require('passport');
const { BasicStrategy } = require('passport-http');
const boom = require('@hapi/boom'); // permite el manejor de errores
const bcrypt = require('bcrypt'); // nos ayudara a verificar el password comparado con el de la BD

const UsersService = require('../../../services/users');

// implementando la estrategia
passport.use(new BasicStrategy(async function(email, password, cb) {
  const userService = new UsersService();

  try {
    // search user although the service
    const user = await userService.getUser({ email });

    if(!user) {
      return cb(boom.unauthorized(), false);
    }

    // compare the password from strategy vs password from database
    if(!(await bcrypt.compare(password, user.password))) {
      return cb(boom.unauthorized(), false);
    }

    delete user.password;

    // return user
    return cb(null, user);

  } catch(error) {
    return cb(error);
  }
}))
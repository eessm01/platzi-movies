const passport = require('passport');
const { Strategy, ExtractJwt} = require('passport-jwt');
const boom = require('@hapi/boom'); // allow handling errors

const UsersServices = require('../../../services/users');
const { config } = require('../../../config');

passport.use(
  new Strategy({
    secretOrKey: config.authJwtSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
  },
  async function (tokenPayload, cb) {
    const userService = new UsersServices();
    try {
      const user = await userService.getUser({ email: tokenPayload.email });

      if(!user) {
        return cb(boom.unauthorized(), false);
      }

      delete user.password;

      // return user without error
      cb(null, {...user, scopes: tokenPayload.scopes });

    } catch(error) {
      return cb(error);
    }
  })
);

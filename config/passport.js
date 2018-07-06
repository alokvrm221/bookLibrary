const JwtStrategy= require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const Login = require('../models/logins');
const config =  require('./database');

module.exports = function(passport){
  let opts ={};
  // opts.jwtFromRequest = ExtractJwt.fromAuthHeader();

opts.jwtFromRequest =  ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = config.secret;
  passport.use(new JwtStrategy(opts,(jwt_paylaod,done ) => {
    // console.log('1234567890987654322222345678765');
  Login.getUserById({id: jwt_payload.sub},(err, login) => {
    if(err){
      return done(err,false);

    }
    if(login){
      return done(null,login);
    }
    else {
      return done(null,false);
    }
  });
  }))
}

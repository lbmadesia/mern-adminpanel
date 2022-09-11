const passport = require('passport');
const User = require('../models/User');
var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

passport.use(new GoogleStrategy({
    clientID: '300561456108-gs20lv7lhc6eo2c3pmff753itt9s916t.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: "http://localhost:8080/google/auth/result",
    passReqToCallback   : true
  },
  async function (request, accessToken, refreshToken, profile, done) {
    let user = await User.findOne({ googleId: profile.id });
    if(!user && profile.email_verified){
      let avtar = (profile.hasOwnProperty('picture')) ? profile.picture : null;
      user = await User.create({ 
        googleId: profile.id,
        name:profile.given_name,
        lastName:profile.family_name,
        email:profile.email,
        password : profile.id,
        avtar: avtar
      });
    }
    done(user);
  }
));

module.exports = passport;

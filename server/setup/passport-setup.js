const passport = require('passport');
const AmazonStrategy = require('passport-amazon').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const GithubStrategy = require('passport-github').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const InstagramStrategy = require('passport-instagram').Strategy;
const SpotifyStrategy = require('passport-spotify').Strategy;
const TwitchStrategy = require('passport-twitch.js').Strategy;

const ENV = require('../../config/index');
const chalk = require('chalk');

let db = { user: {} }


//SERIALIZATION/ DESERIALISATION
passport.serializeUser((user, done) => {
  //Get the id of the user just authenticated with the setup above, save it as a cookie.
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  //Get use from the db whose id was saved in a cookie
  done(null, db.user);
});


// AMAZON
passport.use(new AmazonStrategy({
  clientID: ENV.AMAZON.clientID,
  clientSecret: ENV.AMAZON.clientSecret,
  callbackURL: "http://localhost:3000/auth/amazon/callback"
},
  (accessToken, refreshToken, profile, cb) => {
    chalk.yellow(JSON.stringify(profile));
    db.user = { ...profile };
    cb(null, db.user);
  }
));


// FACEBOOK
passport.use(new FacebookStrategy({
  clientID: ENV.FACEBOOK.clientID,
  clientSecret: ENV.FACEBOOK.clientSecret,
  callbackURL: "http://localhost:3000/auth/facebook/callback"
},
  (accessToken, refreshToken, profile, cb) => {
    chalk.blue(JSON.stringify(profile));
    db.user = { ...profile };
    cb(null, db.user);
  }
));


// GITHUB
passport.use(new GithubStrategy({
  clientID: ENV.GITHUB.clientID,
  clientSecret: ENV.GITHUB.clientSecret,
  callbackURL: "http://localhost:3000/auth/github/callback"
},
  (accessToken, refreshToken, profile, cb) => {
    chalk.blue(JSON.stringify(profile));
    db.user = { ...profile };
    cb(null, db.user);
  }
));


// GOOGLE
passport.use(new GoogleStrategy({
  clientID: ENV.GOOGLE.clientID,
  clientSecret: ENV.GOOGLE.clientSecret,
  callbackURL: "http://localhost:3000/auth/google/callback"
},
  (accessToken, refreshToken, profile, cb) => {
    chalk.blue(JSON.stringify(profile));
    db.user = { ...profile };
    cb(null, db.user);
  }
));


// INSTAGRAM
passport.use(new InstagramStrategy({
  clientID: ENV.INSTAGRAM.clientID,
  clientSecret: ENV.INSTAGRAM.clientSecret,
  callbackURL: "http://localhost:3000/auth/instagram/callback"
},
  (accessToken, refreshToken, profile, cb) => {
    chalk.blue(JSON.stringify(profile));
    db.user = { ...profile };
    cb(null, db.user);
  }
));


// SPOTIFY
passport.use(new SpotifyStrategy({
  clientID: ENV.SPOTIFY.clientID,
  clientSecret: ENV.SPOTIFY.clientSecret,
  callbackURL: "http://localhost:3000/auth/spotify/callback"
},
  (accessToken, refreshToken, profile, cb) => {
    chalk.green(JSON.stringify(profile));
    db.user = { ...profile };
    cb(null, db.user);
  }
));


// TWITCH
passport.use(new TwitchStrategy({
  clientID: ENV.TWITCH.clientID,
  clientSecret: ENV.TWITCH.clientSecret,
  callbackURL: "http://localhost:3000/auth/twitch/callback"
},
  (accessToken, refreshToken, profile, cb) => {
    chalk.blue(JSON.stringify(profile));
    db.user = { ...profile };
    cb(null, db.user);
  }
));
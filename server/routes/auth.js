const passport = require('passport');
const router = require('express').Router();

// AUTH ROUTES

//AMAZON
router.get('/amazon', passport.authenticate('amazon'));
router.get('/amazon/callback', passport.authenticate('amazon', { failureRedirect: '/login' }), (req, res) => {
  res.redirect('/');
});

//FACEBOOK
router.get('/facebook', passport.authenticate('facebook'));
router.get('/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login' }), (req, res) => {
  res.redirect('/');
});

//GITHUB
router.get('/github', passport.authenticate('github'));
router.get('/github/callback', passport.authenticate('github', { failureRedirect: '/login' }), (req, res) => {
  res.redirect('/');
});

//GOOGLE
router.get('/google', passport.authenticate('google'));
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
  res.redirect('/');
});

//INSTAGRAM
router.get('/instagram', passport.authenticate('instagram'));
router.get('/instagram/callback', passport.authenticate('instagram', { failureRedirect: '/login' }), (req, res) => {
  res.redirect('/');
});

//SPOTIFY
router.get('/spotify', passport.authenticate('spotify'));
router.get('/spotify/callback', passport.authenticate('spotify', { failureRedirect: '/login' }), (req, res) => {
  res.redirect('/');
});

//TWITCH
router.get('/twitch', passport.authenticate('twitch'));
router.get('/twitch/callback', passport.authenticate('twitch', { failureRedirect: '/login' }), (req, res) => {
  res.redirect('/');
});

module.exports = router;
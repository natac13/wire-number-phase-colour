import express from 'express';
import passport from '../auth/googleStrategy.js';

const router = express.Router();

import oauthClient from '../auth/googleClient.js';

const scopes = [
  'https://www.googleapis.com/auth/drive',
  'https://www.googleapis.com/auth/spreadsheets',
  'https://www.googleapis.com/auth/userinfo.profile',
  'https://www.googleapis.com/auth/userinfo.email',
];

const url = oauthClient.generateAuthUrl({
  access_type: 'offline',
  scope: scopes,
});

// route to handle just the googleapi authentication which I am not using now.
router.get('/', (req, res, next) => {
  return res.redirect(url);
});

// route for google login with passport with requested scopes.
router.get('/google', passport.authenticate('google', { scope: scopes }));
// callback route for passport
// failure will direct to login page which is a react-route.
router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => res.redirect('/'));

export default router;


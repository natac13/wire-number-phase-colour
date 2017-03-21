import express from 'express';
const router = express.Router();

router.get('/', (req, res, next) => {
  if (req.isAuthenticated()) { return next(); }
  return res.json({ error: 'User Not Logged In', err: new Error('UserNotLoggedIn') });
});

export default router;

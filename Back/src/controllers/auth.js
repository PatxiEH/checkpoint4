const authRouter = require('express').Router();
const User = require('../models/user');
const { calculateToken } = require('../helpers/auth');

authRouter.post('/', (req, res, next) => {
  try {
    const { email, password } = req.body;
    User.getByEmail(email)
      .then(async (user) => {
        if (!user) throw new ErrorHandler(401, 'This user does not exist');
        else {
          const passwordIsCorrect = await User.verifyPassword(
            password,
            user.password
          );
          if (passwordIsCorrect) {
            const id = user.id_user;
            const token = calculateToken(email, id);
            res.cookie('user_token', token, {
              expires: new Date(new Date().getTime() + 3600 * 1000),
              httpOnly: true,
            });
            res.json({
              id: user.id_user,
            });
          } else res.status(401).send('Invalid Credentials');
        }
      })
      .catch((err) => next(err));
  } catch (err) {
    next(err);
  }
});

module.exports = { authRouter };

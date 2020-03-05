const User = require('../models/User');

module.exports = {
  async index(req, res, next) {
    const { username, password } = req.body;

    try {
      const user = await User.findOne({ where: { username } });
      if (user === null) {
        return res.status(401).json({ message: 'Usuario invalido' });
      }

      if (!(await user.checkPassword(password))) {
        return res.status(401).json({ message: 'Password invalido' });
      }
      user.password = undefined;
      user.username = undefined;
      return res.json({
        user,
        token: user.generateToken(),
      });
    } catch (error) {
      return next(error);
    }
  },

};

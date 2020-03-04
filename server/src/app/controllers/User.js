const bcrypt = require('bcryptjs');
const User = require('../models/User');

module.exports = {

  async store(req, res, next) {
    const { username, password, role } = req.body;

    const pass = await bcrypt.hash(password, 8);

    try {
      const user = await User.findOne({ where: { username } });

      if (user) {
        return res.status(500).json({ message: 'Nome de usuario ja existe' });
      }
      const newUser = await User.create({
        username,
        password: pass,
        role,
      });
      return res.json({ newUser });
    } catch (error) {
      res.status(401);
      next(error);
    }
  },
  async update(req, res) {
    res.json({ message: 'hello update' });
  },
};

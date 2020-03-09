const jwt = require('jsonwebtoken');
const { promisify } = require('util');

module.exports = async (req, res, next) => {
  const authHeader = req.body.authorization;
  //console.log(req.body)

  if (!authHeader) {
    return res.json({ message: 'Token not provided' });
  }

  const parts = authHeader.split(' ');

  if (parts.length !== 2) {
    return res.json({ message: 'Token error!!' });
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = await promisify(jwt.verify)(token, process.env.APP_SECRET);
    req.userId = decoded.id;
    req.userRole = decoded.role;
    return next();
  } catch (error) {
    res.status(401);
    return next(error);
  }
};

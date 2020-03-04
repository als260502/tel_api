const Fone = require('../models/SerPredialfone');

module.exports = {
  async index(req, res, next) {
    const { predialfone } = req.body;

    if (!predialfone) {
      return res.status(401).json({ message: 'Numero nao informado' });
    }
    try {
      const fone = await Fone.findOne(
        {
          attributes:
            [
              'numero',
              'codcliente',
              'num_ip',
              'num_mac',
              'sip_username',
              'sip_password',
            ],
          where: { sip_username: predialfone },
        },
      );
      res.json(fone);
      return next();
    } catch (error) {
      return next(error);
    }
  },
};

const Radius = require('../models/Radius');

module.exports = {
  async index(req, res, next) {
    const { user } = req.body;

    if (!user) {
      return res.status(401).json({ message: 'Usuario nao informado' });
    }
    try {
      const usuario = await Radius.findOne(
        {
          attributes:
            [
              'username',
              'acctstoptime',
              'calledstationid',
              'callingstationid',
              'framedipaddress',
              'nasportid',
            ],
          where: { username: `${user}@predialnet.com.br` },
          order: [
            ['radacctid', 'DESC'],
          ],
        },
      );

      if (!usuario) {
        return res.status(401).json({ message: 'Nenhum usuario encontrado' });
      }

      res.json(usuario);
      return next();
    } catch (error) {
      return next(error);
    }
  },
  async find(req, res, next) {
    console.log(req.body)
    const { mac } = req.body;

    if (!mac) {
      return res.status(401).json({ message: 'Usuario nao informado' });
    }
    try {
      const usuario = await Radius.findOne(
        {
          attributes:
            [
              'username',
              'acctstoptime',
              'calledstationid',
              'callingstationid',
              'framedipaddress',
              'nasportid',
            ],
          where: { callingstationid: `${mac}` },
          order: [
            ['radacctid', 'DESC'],
          ],
        },
      );

      if (!usuario) {
        return res.status(401).json({ message: 'Nenhum usuario encontrado' });
      }

      return res.json(usuario);

    } catch (error) {
      return next(error);
    }
  },
};

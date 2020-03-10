const Fone = require('../models/SerPredialfone');
const { Op } = require('sequelize')

module.exports = {
  async index(req, res, next) {
    console.log(req.body)
    const { predialfone } = req.body;

    if (!predialfone) {
      return res.json({ message: 'Numero nao informado' });
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
              'portab_entrante',
            ],
          where: { [Op.or]: [{ sip_username: predialfone }, { portab_entrante: predialfone }] },
        },
      );
      if (!fone) {
        return res.status(400).json({ message: "telefone nao encontrado" })
      }
      return res.json(fone);
    } catch (error) {
      return next(error);
    }
  },
};

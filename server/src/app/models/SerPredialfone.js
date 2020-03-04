const { Model, DataTypes } = require('sequelize');

class SerPredialfone extends Model {
  static init(sequelize) {
    super.init(
      {
        numero: DataTypes.INTEGER,
        codcliente: DataTypes.INTEGER,
        num_ip: DataTypes.STRING,
        num_mac: DataTypes.STRING,
        sip_username: DataTypes.STRING,
        sip_password: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: 'ser_predialfone',
      },
    );
  }
}

module.exports = SerPredialfone;

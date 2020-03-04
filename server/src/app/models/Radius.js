const { Model, DataTypes } = require('sequelize');

class Radius extends Model {
  static init(sequelize) {
    super.init(
      {
        username: DataTypes.STRING,
        acctstoptime: DataTypes.STRING,
        calledstationid: DataTypes.STRING,
        callingstationid: DataTypes.STRING,
        framedipaddress: DataTypes.STRING,
        nasportid: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: 'radacct',
      },
    );
  }
}

module.exports = Radius;

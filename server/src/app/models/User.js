const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = require('../../credentials/databaseCredentials').app_secret

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        role: DataTypes.STRING,
        password_hash: DataTypes.VIRTUAL,
      },
      {
        sequelize,
        tableName: 'users',
      },
    );
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password);
  }

  generateToken() {
    return jwt.sign({ id: this.id, role: this.role }, secret);
  }
}

module.exports = User;

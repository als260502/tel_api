const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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
    return jwt.sign({ id: this.id, role: this.role }, process.env.APP_SECRET);
  }
}

module.exports = User;

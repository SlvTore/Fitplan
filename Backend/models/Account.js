const { DataTypes } = require('sequelize');
const sequelize = require('../config/Database');

const Account = sequelize.define('Account', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: "Username is required"
      },
      notEmpty: {
        msg: "Username cannot be empty"
      }
    }
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: {
      msg: 'Email already in use'
    },
    validate: {
      isEmail: {
        msg: "Must be a valid email address"
      },
      notNull: {
        msg: "Email is required"
      },
      notEmpty: {
        msg: "Email cannot be empty"
      }
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: "Password is required"
      },
      notEmpty: {
        msg: "Password cannot be empty"
      }
    }
  },
}, {
  tableName: 'accounts',
  timestamps: false,
});

module.exports = Account;

const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { msg: "Name cannot be empty" },
      len: {
        args: [2, 50],
        msg: "Name should be between 2 to 50 characters",
      }
    }
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: {
      msg: "Email already exists",
    },
    validate: {
      isEmail: { msg: "Must be a valid email address" },
    }
  },

  phone: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      is: {
        args: /^[0-9]{10,15}$/,
        msg: "Phone number must be 10 to 15 digits",
      }
    }
  },

  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [6, 100],
        msg: "Password must be at least 6 characters long",
      }
    }
  },

  profileImage: {
    type: DataTypes.STRING, // To Store URL or file path
    allowNull: true,
    validate: {
      isUrl: {
        msg: "Profile image must be a valid URL",
      }
    }
  },

  role: {
    type: DataTypes.ENUM('user', 'admin'),
    defaultValue: 'user',
    allowNull: false,
  },

  isVerified: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },

}, {
  timestamps: true,
  tableName: 'users',
});

module.exports = User;
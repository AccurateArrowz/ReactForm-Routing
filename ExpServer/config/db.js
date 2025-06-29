const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres', 'Sujay', 'password', {
  host: 'localhost',
  dialect: 'postgres', 
});

module.exports = sequelize;
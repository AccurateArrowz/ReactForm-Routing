const sequelize = require('../config/db');
const User = require('./User');

const connectDb = async () => {
  try {
    await sequelize.authenticate();
    console.log('DB connected');
    await sequelize.sync({ alter: true }); 
  } catch (err) {
    console.error('Unable to connect to DB:', err);
  }
};

module.exports = { connectDb, User };
const { Sequelize } = require('sequelize')
const sequelize = new Sequelize ('sql10759410', 'sql10759410', 'QvPA7IU3Qe',{
    host: 'sql10.freesqldatabase.com',
    dialect: 'mysql'
});
module.exports = sequelize;
const { v4:uuid } = require('uuid')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('footballClubs', [
      {
        id: uuid(),
        name: 'brentford',
        stadium: 'emirates',
        coach: 'Ernest',
        topSix: true,
        ucl: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('footballClubs', null, {});
  },
};
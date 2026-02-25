'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'User One',
        email: 'user1@test.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'User Two',
        email: 'user2@test.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
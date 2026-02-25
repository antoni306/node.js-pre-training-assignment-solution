'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    const users = await queryInterface.sequelize.query(
      `SELECT id, email FROM "Users";`,
      { type: Sequelize.QueryTypes.SELECT }
    );

    const user1 = users.find(u => u.email === 'user1@test.com');
    const user2 = users.find(u => u.email === 'user2@test.com');
    if (!user1 || !user2) {
      throw new Error(
        `Seed error: users not found. Found emails: ${users.map(u => u.email).join(', ')}`
      );
    }
    await queryInterface.bulkInsert('Todos', [
      { title: 'U1 Todo 1', description: 'desc', status: 'active', userId: user1.id, createdAt: new Date(), updatedAt: new Date() },
      { title: 'U1 Todo 2', description: 'desc', status: 'completed', userId: user1.id, createdAt: new Date(), updatedAt: new Date() },
      { title: 'U1 Todo 3', description: 'desc', status: 'active', userId: user1.id, createdAt: new Date(), updatedAt: new Date() },

      { title: 'U2 Todo 1', description: 'desc', status: 'active', userId: user2.id, createdAt: new Date(), updatedAt: new Date() },
      { title: 'U2 Todo 2', description: 'desc', status: 'completed', userId: user2.id, createdAt: new Date(), updatedAt: new Date() },
      { title: 'U2 Todo 3', description: 'desc', status: 'active', userId: user2.id, createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Todos', null, {});
  },
};
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
    **/ Example:
      await queryInterface.bulkInsert('Categories', [{
        catName: 'John Doe',
        createdAt:new Date(),
        updatedAt:new Date()
      }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     **/ Example:
      await queryInterface.bulkDelete('Categories', null, {});
     
  }
};

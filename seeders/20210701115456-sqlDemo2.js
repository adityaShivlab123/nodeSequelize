'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     */ Example:
      await queryInterface.bulkInsert('ListingVerients', [{
        listAmount: 50,
        listId:2,
        createdAt:new Date(),
        updatedAt:new Date()
      }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     */ Example:
      await queryInterface.bulkDelete('ListingVerients', null, {});
     
  }
};

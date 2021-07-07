'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     */ Example:
      await queryInterface.bulkInsert('Listings', [{
        listName: 'rajj',
        listStatus:true,
        catId:1,
        createdAt:new Date(),
        updatedAt:new Date()
      }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     */Example:
      await queryInterface.bulkDelete('Listings', null, {});
     
  }
};

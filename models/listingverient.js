'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ListingVerient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ListingVerient.belongsTo(models.Listing, {
				as: 'listing',
				foreignKey: 'listId',
			});
    }
  };
  ListingVerient.init({
    listId: DataTypes.INTEGER,
    listAmount: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'ListingVerient',
  });
  return ListingVerient;
};
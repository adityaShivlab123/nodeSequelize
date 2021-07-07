"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Listing extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Listing.belongsTo(models.Category, {
                as: "category",
                foreignKey: "catId",
            });
            Listing.hasOne(models.ListingVerient, {
                as: "listingVerient",
                foreignKey: "listId",
            });
        }
    }
    Listing.init(
        {
            catId: DataTypes.INTEGER,
            listName: DataTypes.STRING,
            listStatus: DataTypes.BOOLEAN,
        },
        {
            sequelize,
            modelName: "Listing",
        }
    );
    // Listing.sync({ alter: true });
    return Listing;
};

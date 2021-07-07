const { Category } = require("../../models");
exports.getUser = async (req, res) => {
    try {
        const fatchUser = await Category.findAll({
            // include: [
            //     {
            //         model: Listing,
            //         as: "listing",
                    
            //         include: [
            //             {
            //                 model: ListingVerient,
            //                 as: "listingVerient",
            //                 attributes: [
            //                     [
            //                         sequelize.fn(
            //                             "MAX",
            //                             sequelize.col("listAmount")
            //                         ),
            //                         "maxlistAmount",
            //                     ],
            //                 ],
            //             },
            //         ],
            //     },
            // ],
            // // group:["id"]
        });

        res.status(200).send({
            status: 200,
            message: "Successful!!",
            data: fatchUser,
        });
    } catch (error) {
        res.status(400).send({
            status: 400,
            message: "went something wrong!!",
            error,
        });
        console.log(error);
    }
};

//SELECT Category.id, Category.catName, Category.createdAt, Category.updatedAt, listing.id , listing.catId , listing.listName , listing.listStatus , listing.createdAt , listing.updatedAt , listing->listingVerient.id  FROM Categories LEFT OUTER JOIN Listings ON Category.id = listing.catId LEFT OUTER JOIN ListingVerients ->listingVerient ON listing.id = listing->listingVerient.listId;"
 
const mongoose = require("mongoose");

const ItemsSchema = new mongoose.Schema(
	{
		name: { type: String },
		price: { type: Number },
		inStockQuantity: { type: Number },
		//type: { type: String },
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Items", ItemsSchema);



const mongoose = require("mongoose");

const categorieSchema = new mongoose.Schema(
	{
		name: { type: String },
		
	},
	{ timestamps: true }
);
module.exports = mongoose.model("categorie", categorieSchema);
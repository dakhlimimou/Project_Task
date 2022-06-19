const ItemsModels = require("../models/Items.models");

const createItems = async (req, res) => {
	const newItems = new ItemsModels({
		name: req.body.Name,
		price: req.body.Price,
		inStockQuantity: req.body.InStockQuantity,
		//type: req.body.Type,
	});
	try {
		const savedItems = await newItems.save();
		return res.status(200).json(savedItems);
	} catch (err) {
		return res.status(500).json(err);
	}
};

const getItems = async (req, res) => {
	try {
		const Items = await ItemsModels.find();
		return res.status(200).json(Items);
	} catch (err) {
		return res.status(500).json(err);
	}
};
/*const getItemss = async (req, res) => {
	const id = req.params.ItemsId;
	try {
		const Items = await ItemsModels.findById(id);
		return res.status(200).json(Items);
	} catch (err) {
		return res.status(500).json(err);
	}
	
};*/
const deleteItems = async (req, res) => {
	const id = req.params.ItemsId;
	try {
		const Items = await ItemsModels.findByIdAndDelete(id);
		return res.status(200).json(Items);
	} catch (err) {
		return res.status(500).json(err);
	}
};
const updateItems = async (req, res) => {
	const id = req.params.ItemsId;
	try {
		const Items = await ItemsModels.findByIdAndUpdate(id, req.body, {
			new: true,
		});
		return res.status(200).json(Items);
	} catch (err) {
		return res.status(500).json(err);
	}
};
module.exports.createItems = createItems;
module.exports.getItems = getItems;
module.exports.deleteItems = deleteItems;
module.exports.updateItems = updateItems;
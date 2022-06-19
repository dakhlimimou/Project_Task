const categorieModels = require("../models/categorie.models");

const createcategorie = async (req, res) => {
	const newcategorie = new categorieModels({
		name: req.body.Name,
	});
	try {
		const savedcategorie = await newcategorie.save();
		return res.status(200).json(savedcategorie);
	} catch (err) {
		return res.status(500).json(err);
	}
};

const getcategorie = async (req, res) => {
	try {
		const categorie = await categorieModels.find();
		return res.status(200).json(categorie);
	} catch (err) {
		return res.status(500).json(err);
	}
};

const deletecategorie = async (req, res) => {
	const id = req.params.categorieId;
	try {
		const categorie = await categorieModels.findByIdAndDelete(id);
		return res.status(200).json(categorie);
	} catch (err) {
		return res.status(500).json(err);
	}
};
const updatecategorie = async (req, res) => {
	const id = req.params.categorieId;
	try {
		const categorie = await categorieModels.findByIdAndUpdate(id, req.body, {
			new: true,
		});
		return res.status(200).json(categorie);
	} catch (err) {
		return res.status(500).json(err);
	}
};
module.exports.createcategorie = createcategorie;
module.exports.getcategorie = getcategorie;
module.exports.deletecategorie = deletecategorie;
module.exports.updatecategorie = updatecategorie;
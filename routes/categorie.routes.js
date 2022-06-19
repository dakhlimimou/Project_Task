const {

	createcategorie,
	getcategorie,
	deletecategorie,
	updatecategorie,
} = require("../controllers/categorie.controllers");

const router = require("express").Router();

//router.get("/", getcategories);
router.get("/:categorieId", getcategorie);
router.delete("/:categorieId", deletecategorie);
router.put("/:categorieId", updatecategorie);
router.post("/", createcategorie);

module.exports = router;

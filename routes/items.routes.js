const {
	createItems,
	getItems,
	deleteItems,
	updateItems,
} = require("../controllers/Items.controllers");

const router = require("express").Router();

//router.get("/", getItemss);
router.get("/:ItemsId", getItems);
router.delete("/:ItemsId", deleteItems);
router.put("/:ItemsId", updateItems);
router.post("/", createItems);

module.exports = router;

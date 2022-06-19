//import section
const express = require("express");
const app = express();
const mongoose = require("mongoose");
//DB connection
mongoose.connect(
	"mongodb+srv://Dakhli_Riadh:fM1S2CvC565MvSD8@cluster0.zma3mog.mongodb.net/?retryWrites=true&w=majority"
);
mongoose.connection.on("connected", () => {
	console.log("DB connected");
});
mongoose.connection.on("error", (err) => {
	console.log("mongodb failed with", err);
});
//import routes
const ItemsRoutes = require("./routes/Items.routes");
const categorieRoutes = require("./routes/categorie.routes");
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes middleware
app.use("/Items", ItemsRoutes);
app.use("/categorie", categorieRoutes);
//server listening
const port = 8000;

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
const express = require("express");
const app = express();
const cors = require("cors");

const db = require("./db/models/index");
const { fruit } = db;

const FruitController = require("./controllers/FruitController");
const fruitController = new FruitController(fruit);

const FruitRouter = require("./routers/FruitRouter");
const fruitRouter = new FruitRouter(fruitController, express);

// Setting up middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/fruit", fruitRouter.route());

app.use("/", (req, res) => {
  res.send("Incorrect path");
});

app.listen(8080, () => {
  console.log("Application listening to port 8080");
});

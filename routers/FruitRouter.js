class FruitRouter {
  constructor(fruitController, express) {
    this.controller = fruitController;
    this.express = express;
  }

  route = () => {
    let router = this.express.Router();

    router.get("/", this.controller.list);
    router.post("/", this.controller.add);
    router.put("/:id", this.controller.edit);
    router.delete("/:id", this.controller.delete);

    return router;
  };
}

module.exports = FruitRouter;

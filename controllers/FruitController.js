class FruitController {
  constructor() {
    this.fruitArray = ["Apple", "Banana"];
  }

  list = (req, res) => {
    res.send({ fruit: this.fruitArray });
  };

  add = (req, res) => {
    let fruitToAdd = req.body.fruit;
    this.fruitArray.push(fruitToAdd);
    res.send({ fruit: this.fruitArray, message: "success" });
  };

  edit = (req, res) => {
    let fruitToAdd = req.body.fruit;
    let fruitToReplace = req.params.name;
    let index = this.fruitArray.indexOf(fruitToReplace);
    this.fruitArray.splice(index, 1, fruitToAdd);
    res.send({ fruit: this.fruitArray, message: "success" });
  };

  delete = (req, res) => {
    let fruitToReplace = req.params.name;
    let index = this.fruitArray.indexOf(fruitToReplace);
    if (index == -1) {
      res.send({ message: "No fruit with that name", fruit: this.fruitArray });
    } else {
      this.fruitArray.splice(index, 1);
      res.send({ fruit: this.fruitArray, message: "success" });
    }
  };
}
module.exports = FruitController;

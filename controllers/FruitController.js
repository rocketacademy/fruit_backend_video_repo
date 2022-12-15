class FruitController {
  constructor(model) {
    this.model = model;
  }

  list = async (req, res) => {
    let data = await this.model.findAll();
    res.json({ fruit: data, message: "success" });
  };

  add = async (req, res) => {
    let fruitToAdd = req.body;
    let fruitAdded = await this.model.create(fruitToAdd);
    let data = await this.model.findAll();
    res.json({ fruit: data, message: "success" });
  };

  edit = async (req, res) => {
    let fruitToAdd = req.body;
    let fruitToReplace = req.params.id;
    let fruitToEdit = await this.model.findByPk(fruitToReplace);
    await fruitToEdit.update(fruitToAdd);
    let data = await this.model.findAll();
    res.json({ fruit: data, message: "success" });
  };

  delete = async (req, res) => {
    let fruitToDelete = req.params.id;
    await this.model.destroy({ where: fruitToDelete });
    let data = await this.model.findAll();
    res.json({ fruit: data, message: "success" });
  };
}
module.exports = FruitController;

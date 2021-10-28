const tasksModel = require("../mongose/mongose");
const controler = {};
controler.geting = async (req, res) => {
  const data = await tasksModel.find();
  if (data.length !== 0) {
    res.status(200).json(data);
  } else res.status(404).json({ error: "nothing found" });
};
controler.add = async (req, res, next) => {
  let data = req.body;
  let response = await tasksModel.create(data);
  res.status(201).json({ message: "successfully added", task: response });
};
controler.update = async (req, res) => {
  let data = await req.body;
  let edited = await tasksModel.updateOne({ id: req.params.id }, data);
  if (edited.matchedCount === 1 && edited.modifiedCount === 1) {
    res.status(201).json({ edited });
  } else {
    res.status(404).json({ edited, error: "not found" });
  }
};
controler.delete = async (req, res) => {
  let deleted = await tasksModel.deleteOne({ id: req.params.id });
  if (deleted.deletedCount === 1) {
    res
      .status(200)
      .json({ message: "successfully deleted", taskDeleted: deleted });
  } else {
    res
      .status(410)
      .json({ error: "data was deleted or has not been created yet" });
  }
};
module.exports = controler;

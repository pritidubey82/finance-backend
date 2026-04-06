const Record = require("../models/Record");

exports.createRecord = async (req, res) => {
  try {
    const record = await Record.create(req.body);
    res.json(record);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

exports.getRecords = async (req, res) => {
  try {
    const records = await Record.find();
    res.json(records);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

exports.updateRecord = async (req, res) => {
  try {
    const record = await Record.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
      context: "query"
    });
    if (!record) return res.status(404).json({ msg: "Record not found" });
    res.json(record);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

exports.deleteRecord = async (req, res) => {
  try {
    const record = await Record.findByIdAndDelete(req.params.id);
    if (!record) return res.status(404).json({ msg: "Record not found" });
    res.json({ msg: "Record deleted" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

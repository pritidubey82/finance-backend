const Record = require("../models/Record");

exports.getSummary = async (req, res) => {
  try {
    const totalRecords = await Record.countDocuments();
    const totalAmount = await Record.aggregate([
      { $group: { _id: null, sum: { $sum: "$amount" } } }
    ]);

    res.json({
      totalRecords,
      totalAmount: totalAmount.length > 0 ? totalAmount[0].sum : 0
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const User = require("../models/User");

exports.getUsers = async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
};

exports.getUserById = async (req, res) => {
  const user = await User.findById(req.params.id).select("-password");
  if (!user) return res.status(404).json({ msg: "User not found" });
  res.json(user);
};

exports.updateUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    context: "query"
  }).select("-password");
  if (!user) return res.status(404).json({ msg: "User not found" });
  res.json(user);
};

exports.deleteUser = async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  if (!user) return res.status(404).json({ msg: "User not found" });
  res.json({ msg: "User deleted" });
};

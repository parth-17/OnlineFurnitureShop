const mongoose = require("mongoose");
const { required } = require("nodemon/lib/config");
const StateModel = require("./state-model");

const StatusSchema = new mongoose.Schema({
  status: {
    type: String,
    required: true,
  },
});

const StatusModel = mongoose.model("status", StatusSchema);
module.exports = StatusModel;

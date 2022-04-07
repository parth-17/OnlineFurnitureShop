const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  total: {
    type: String,
    required: true,
  },

  //  foreign key
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  status: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "status",
  },
  address: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "address",
  },
});

const OrderModel = mongoose.model("orders", OrderSchema);
module.exports = OrderModel;

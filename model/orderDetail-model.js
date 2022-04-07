const mongoose = require("mongoose");

const OrderDetailSchema = new mongoose.Schema({
  price: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  payment: {
    type: String,
    required: true,
  },
  paymentResult: {
    id: { type: String },
    status: { type: String },
    update_time: { type: String },
  },

  // foreign key
  order: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "order",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "product",
  },
});

const OrderDetailModel = mongoose.model("orderDetails", OrderDetailSchema);
module.exports = OrderDetailModel;

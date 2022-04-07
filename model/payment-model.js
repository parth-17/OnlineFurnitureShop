const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema(
  {
    amount: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
    },
    transactionCode: {
      type: String,
      required: true,
    },
    // foreign key
    order: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "order",
    },
    status: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "status",
    },
  },
  {
    timestamps: true,
  }
);

const PaymentModel = mongoose.model("payment", PaymentSchema);
module.exports = PaymentModel;

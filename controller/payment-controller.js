const bcrypt = require("bcrypt");
const PaymentModel = require("../model/payment-model");

//add [Post]
module.exports.addPayment = function (req, res) {
  let amount = req.body.amount;
  let type = req.body.type;
  let transactionCode = req.body.transactionCode;

  //encrypt
  let encTransactionCode = bcrypt.hashSync(transactionCode, 15);

  let order = req.body.order;
  let status = req.body.status;

  let payment = new PaymentModel({
    amount: amount,
    type: type,
    transactionCode: encTransactionCode,
    order: order,
    status: status,
  });
  payment.save(function (err, success) {
    if (err) {
      res.json({ msg: "Something went wrong!!!", data: err, status: -1 });
    } else {
      res.json({ msg: "Payment Done...", data: success, status: 200 });
    }
  });
};

//list

module.exports.getAllPayments = function (req, res) {
  PaymentModel.find()
    .populate("order")
    .exec(function (err, success) {
      if (err) {
        res.json({ msg: "Something went wrong!!!", data: err, status: -1 });
      } else {
        res.json({ msg: "Paymentss ret...", data: success, status: 200 });
      }
    });
};

// delete

module.exports.deletePayment = function (req, res) {
  //params userId
  let paymentId = req.params.paymentId; //postman userid

  PaymentModel.deleteOne({ _id: paymentId }, function (err, success) {
    if (err) {
      res.json({ msg: "Something went wrong!!!", data: err, status: -1 });
    } else {
      res.json({ msg: "Payment removed...", data: success, status: 200 });
    }
  });
};

// update

module.exports.updatePayment = function (req, res) {
  let parampaymentId = req.body.paymentId;
  let paramamount = req.body.amount;
  let paramtype = req.body.type;
  let paramtransactionCode = req.body.transactionCode;

  //let role = req.body.role

  PaymentModel.updateOne(
    { _id: parampaymentId },
    {
      amount: paramamount,
      type: paramtype,
      transactionCode: paramtransactionCode,
    },
    function (err, success) {
      if (err) {
        res.json({ msg: "Something went wrong!!!", data: err, status: -1 });
      } else {
        res.json({ msg: "Payments Updated...", status: 200, data: success });
      }
    }
  );
};

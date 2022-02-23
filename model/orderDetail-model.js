const mongoose = require("mongoose")

const OrderDetailSchema = new mongoose.Schema({

    price: {
        type: String, required: true
    },
    quantity: {
        type: String, required: true
    },

    // foreign key 
    order: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "order"
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product"
    }

})

const OrderDetailModel = mongoose.model("orderDetails", OrderDetailSchema)
module.exports = OrderDetailModel
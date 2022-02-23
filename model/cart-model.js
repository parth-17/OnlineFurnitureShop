const mongoose = require("mongoose")

const CartSchema = new mongoose.Schema({

    quantity: {
        type: String
    },

    // foreign key 
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    product:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "product"
    }
})

const CartModel = mongoose.model("carts", CartSchema)
module.exports = CartModel

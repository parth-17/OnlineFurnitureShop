const mongoose = require("mongoose")

const VendorProductSchema = new mongoose.Schema({

    quantity: {
        type: String, required: true
    },
    price: {
        type: String, required: true
    },

    // foreign key 
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product"
    },
    vendor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "vendor"
    }

})

const VendorProductModel = mongoose.model("vendorProducts",VendorProductSchema)
module.exports = VendorProductModel
const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({

    productName: {
        type:String, required:true
     },
    // basePrice{
    //     type: Float32Array
    // }

    // foreign key
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "category"
    },
    subcategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "subcategory"
    },
    brand: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "brand"
    }

})

const ProductModel = mongoose.model("products",ProductSchema)
module.exports = ProductModel
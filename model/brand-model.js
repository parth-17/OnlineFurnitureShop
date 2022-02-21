const mongoose = require("mongoose")

const BrandSchema = new mongoose.Schema({

    brandName:{
        type: String, required: true  
    }

})

const BrandModel = mongoose.model("brand",BrandSchema)
module.exports = BrandModel
const mongoose= require("mongoose")

//schema

let CategorySchema = new mongoose.Schema({

    categoryName:{
        type:String,require:true
    },  
    isActive:{
        type:Boolean
    }
})

const CategoryModel = mongoose.model("category",CategorySchema)
module.exports = CategoryModel
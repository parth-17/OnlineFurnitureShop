//const { Category } = require("@material-ui/icons")
const mongoose = require("mongoose")

const SubcategorySchema = new mongoose.Schema({

    subcategoryName:{
        type : String, 
        require : true
    },

    isActive:{
        type : Boolean
    },

    //foreign key
    category : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "category"
    }

})

const SubcategoryModel = mongoose.model("subCategories",SubcategorySchema)
module.exports = SubcategoryModel
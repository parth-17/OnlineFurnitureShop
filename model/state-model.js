const mongoose = require("mongoose")

const StateSchema = new mongoose.Schema({

    stateName:{
        type: String, required: true  
    }

})

const StateModel = mongoose.model("state",StateSchema)
module.exports = StateModel
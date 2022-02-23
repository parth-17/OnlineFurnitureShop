const mongoose = require("mongoose")
const StateModel = require("./state-model")

const StatusSchema = new mongoose.Schema({

    status: {
        type: String
    }

})

const StatusModel = mongoose.model("status",StatusSchema)
module.exports = StatusModel
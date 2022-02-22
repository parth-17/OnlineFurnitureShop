const mongoose = require("mongoose")

const CitySchema = new mongoose.Schema({

    cityName: {
        type: String, required: true
    },
    
    //foreign key
    state: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "state"
    }
})

const CityModel = mongoose.model("cities",CitySchema)
module.exports = CityModel
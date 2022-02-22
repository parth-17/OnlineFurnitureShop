const mongoose = require("mongoose")

const VenderDetailsSchema = new mongoose.Schema({

    vendorName: {
        type: String, required: true
    },
    address: {
        type: String
    },
    pincode: {
        type: String
    },
    contactNumber: {
        type: String
    },
    customerSupportNumber: {
        type: String
    },
    feedbackEmail: {
        type: String 
    },

    //foreign key

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    state: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "state"
    },
    city: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "city"
    }


})

const VenderDetailsModel = mongoose.model("vendorDetails",VenderDetailsSchema)
module.exports = VenderDetailsModel
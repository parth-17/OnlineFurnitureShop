const { MapRounded } = require("@material-ui/icons")
const mongoose = require("mongoose")

const CustomerAddressSchema = new mongoose.Schema({

    address: {
        type: String, required: true
    },
    pincode: {
        type: String, required: true
    },
    // isDefault: {
    //     type: Int8Array //---> check it
    // },

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
        ref: "state"
    }


})

const CustomerAddressModel = mongoose.model("customerAddress",CustomerAddressSchema)
module.exports = CustomerAddressModel

const { FunctionsSharp } = require("@material-ui/icons")
const CustomerAddressModel = require("../model/customerAddress-model")
const CustomerAddress = require("../model/customerAddress-model")

// add 

module.exports.addCustomerAddress = function(req, res){

    let address = req.body.address
    let pincode = req.body.pincode
    // let isDefault = req.body.isDefault
    
    let user = req.body.user
    let state = req.body.state
    let city = req. body.city

    let customerAddress = new CustomerAddressModel({
        address: address,
        pincode: pincode,
        // isdefault left
      
        user: user,
        state: state,
        city: city
    })

    customerAddress.save(function(err,success){
        if(err){
            res.json({ msg: "SWR in Customer Address add", data: err, status: -1 })
        } else {
            res.json({ msg:"Customer Address Added...", data: success, status: 200 })
        }
    })

}

// list

module.exports.getAllCustomerAddress = function(req, res){
    
    CustomerAddressModel.find().populate().exec(function(err, success){
        if(err){
            res.json({ msg: "SWR in Customer Address list", data: err, status: -1 })
        } else {
            res.json({ msg:"Customer Address ret...", data: success, status: 200 })
        }
    })
}

// delete

module.exports.deleteCustomerAddress = function(req, res){
    
    let customerAddressId = req.params.customerAddressId
    
    CustomerAddressModel.deleteOne({"_id": customerAddressId}, function(err, success){
        if(err){
            res.json({ msg: "SWR in Customer Address delete", data: err, status: -1 })
        } else {
            res.json({ msg:"Customer Address deleted...", data: success, status: 200 })
        }
    })
    
}

// update

module.exports.updateCustomerAddress = function(req, res){
    let customerAddressId = req.body.customerAddressId
    let address =req.body.address
    let pincode = req.body.pincode
    
    CustomerAddressModel.updateOne({"_id": customerAddressId},{address: address, pincode: pincode}, function(err, success){
        if(err){
            res.json({ msg: "SWR in Customer Address update", data: err, status: -1 })
        } else {
            res.json({ msg:"Customer Address updated...", data: success, status: 200 })
        }
    })

}
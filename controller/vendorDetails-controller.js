const { FunctionsSharp } = require("@material-ui/icons")
const VendorDetailsModel = require("../model/vendorDetails-model")

// add

module.exports.addVendor = function(req, res){

    let vendorName = req.body.vendorName
    let address = req.body.address
    let pincode = req.body.pincode
    let contactNumber = req.body.contactNumber
    let customerSupportNumber = req.body.customerSupportNumber
    let feedbackEmail = req.body.feedbackEmail
    
    //foreign key
    let user = req.body.user
    let state = req.body.state
    let city = req. body.city

    let vendor = new VendorDetailsModel({
        vendorName: vendorName,
        address: address,
        pincode: pincode,
        contactNumber: contactNumber,
        customerSupportNumber: customerSupportNumber,
        feedbackEmail: feedbackEmail,

        user: user,
        state: state,
        city: city
    })

    vendor.save(function(err,success){
        if(err){
            res.json({ msg: "SWR in vendor add", data: err, status: -1 })
        } else {
            res.json({ msg:"Vendor Added...", data: success, status: 200 })
        }
    }) 
}

// list

module.exports.getAllVendors = function(req, res){
    
    VendorDetailsModel.find().populate().exec(function(err, success){
        if(err){
            res.json({ msg: "SWR in vendor list", data: err, status: -1 })
        } else {
            res.json({ msg:"Vendor ret...", data: success, status: 200 })
        }
    })

}

// delete

module.exports.deleteVendor = function(req, res){

    let vendorId = req.params.vendorId

    VendorDetailsModel.deleteOne({"_id": vendorId}, function(err, success){
        if(err){
            res.json({ msg: "SWR in vendor delete", data: err, status: -1 })
        } else {
            res.json({ msg:"Vendor deleted...", data: success, status: 200 })
        } 
    })
}

// update

module.exports.updateVendorDetails = function(req, res){

    let vendorId = req.body.vendorId
    let VendorName = req.body.vendorName
    let address = req.body.address
    let pincode = req.body.pincode
    let contactNumber = req.body.contactNumber
    let customerSupportNumber = req.body.customerSupportNumber
    let feedbackEmail = req.body.feedbackEmail

    VendorDetailsModel.updateOne({"_id": vendorId},{vendorName: VendorName, address: address, pincode: pincode, contactNumber: contactNumber, customerSupportNumber: customerSupportNumber, feedbackEmail: feedbackEmail}, function(err, success){
        if(err){
            res.json({ msg: "SWR in vendor update", data: err, status: -1 })
        } else {
            res.json({ msg:"Vendor updated...", data: success, status: 200 })
        } 
    })

}
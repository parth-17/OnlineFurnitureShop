const VendorProductModel = require("../model/vendorProduct-model")
// const VendorProduct = require("../model/vendorProduct-model")

//add

module.exports.addVendorProduct = function(req, res){

    let quantity = req.body.quantity
    let price = req.body.price

    let product = req.body.product
    let vendor = req.body.vendor

    let VendorProduct = new VendorProductModel({

        quantity : quantity,
        price : price,
        product: product,
        vendor: vendor

    })

    VendorProduct.save(function(err, success){
        if(err){
            res.json({ msg: "Something went wrong in vendor Product!!!", data: err, status: -1})
        } else {
            res.json({ msg: "Vendor Product Added ...", data: success, status: 200})
        }
    })

}

//list 

module.exports.getAllVendorProducts = function(req, res){

    VendorProductModel.find().populate().exec(function(err, success){
        if(err){
            res.json({ msg:"SWR in Vendor Product list!!!", data: err, status: -1})
        } else {
            res.json({msg:"Vendor product ret...", data: success, status: 200})
        }
    })
}

//delete

module.exports.deleteVendorProduct = function(req, res){

    let vendorProductId = req.params.vendorProductId

    VendorProductModel.deleteOne({"_id": vendorProductId}, function(err, success){
        if(err){
            res.json({ msg:"Something went wrong in Vendor Product delete!!!", data: err, status: -1 })
        } else {
            res.json({ msg:"Vendor Product Deleted...", data: success, status: 200 })
        }
    })
}

// update 

module.exports.updateVendorProduct = function(req, res){

    let vendorProductId = req.body.vendorProductId
    let quantity = req.body.quantity
    let price = req.body.price

    VendorProductModel.updateOne({"_id": vendorProductId}, {quantity: quantity}, {price: price}, function(err, success){
        if(err){
            res.json({ msg: "Something went wrong in update!!!", data: err, status: -1})
        } else {
            res.json({ msg: "Update Done in VendorProduct...", data: success, status: 200})
        }
    })

}

const CartModel = require ("../model/cart-model")
// const VendorProductModel = require("../model/vendorProduct-model")

module.exports.addCart = function(req, res){

    let quantity = req.body.quantity
    
    let user = req.body.user
    let product = req.body.product
    
    let Cart = new CartModel({

        quantity : quantity,
        user : user,
        product : product

    })

    Cart.save(function(err, success){
        if(err){
            res.json({ msg: "Something went wrong in add cart!!!", data: err, status: -1})
        } else {
            res.json({ msg: "Cart Added ...", data: success, status: 200})
        }
    })
}

// list

module.exports.getAllCart = function(req, res){

    CartModel.find().populate().exec(function(err, success){
        if(err){
            res.json({ msg: "Something went wrong in cart list !!!", data: err, status: -1})
        } else {
            res.json({ msg: "Cart Ret ...", data: success, status: 200})
        }
    })
    
}

// delete 

module.exports.deleteCart = function(req, res){
    
    let cartId = req.params.cartId
    
    CartModel.deleteOne({"_id": cartId}, function(err, success){
        if(err){
            res.json({ msg: "Something went wrong in cart delete !!!", data: err, status: -1})
        } else {
            res.json({ msg: "Cart deleted ...", data: success, status: 200})
        }
    })
}

// update 

module.exports.updateCart = function(req, res){
    
    let cartId = req.body.cartId
    let quantity = req.body.quantity
    
    CartModel.updateOne({_id: cartId},{quantity: quantity}, function(err, success){
        if(err){
            res.json({ msg: "Something went wrong in cart delete !!!", data: err, status: -1})
        } else {
            res.json({ msg: "Cart deleted ...", data: success, status: 200})
        }
    })

}
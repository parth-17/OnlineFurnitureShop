const OrderDetailModel = require("../model/orderDetail-model")

// add 

module.exports.addOrderDetail = function(req, res){

    let price = req.body.price
    let quantity = req.body.quantity

    let user = req.body.user
    let order = req.body.order
    let product = req.body.product

    let OrderDetail = new OrderDetailModel({

        quantity: quantity,
        price: price,
        user: user,
        order: order,
        product: product

    })

    OrderDetail.save(function(err,success){
        if(err){
            res.json({ msg: "SWR in order detail add", data: err, status: -1})
        } else {
            res.json({ msg: "Order Detail Added...", data: success, status: 200})
        }
    })
}

// list 

module.exports.getAllOrderDetails = function(req, res){
    
    OrderDetailModel.find().populate().exec(function(err, success){
        if(err){
            res.json({ msg: "SWR in order detail list", data: err, status: -1})
        } else {
            res.json({ msg: "Order Detail ret...", data: success, status: 200})
        }
    })
}

// delete 

module.exports.deleteOrderDetail = function(req, res){
    
    let orderDetailId = req.params.orderDetailId
    
    OrderDetailModel.deleteOne({"_id": orderDetailId}, function(err, success){
        if(err){
            res.json({ msg: "SWR in order detail delete", data: err, status: -1})
        } else {
            res.json({ msg: "Order Detail deleted...", data: success, status: 200})
        }
    })
}

// update 

module.exports.updateOrderDetail = function(req, res){
    
    let orderDetailId = req.body.orderDetailId
    let quantity = req.body.quantity
    let price = req.body.price
    
    OrderDetailModel.updateOne({"_id": orderDetailId},{quantity: quantity, price: price}, function(err, success){
        if(err){
            res.json({ msg: "SWR in order detail update", data: err, status: -1})
        } else {
            res.json({ msg: "Order Detail updated...", data: success, status: 200})
        }
    })

}
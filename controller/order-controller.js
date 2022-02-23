const { FunctionsSharp } = require("@material-ui/icons")
const OrderModel = require("../model/order-model")

// add 

module.exports.addOrder = function(req, res){

    let total = req.body.total

    let user = req.body.user
    let status = req.body.status
    let address = req.body.address

    let Order = new OrderModel({

        total : total,
        
        user : user,
        status : status,
        address : address

    })

    Order.save(function(err, success){
        if(err){
            res.json({ msg: "Something went wrong in order!!!", data: err, status: -1})
        } else {
            res.json({ msg: "Order Added ...", data: success, status: 200})
        }
    })
}

//list 

module.exports.getAllOrders = function(req,res){

    OrderModel.find().populate().exec(function(err, success){
        if(err){
            res.json({ msg: "Something went wrong in order list!!!", data: err, status: -1})
        } else {
            res.json({ msg: "Order rer ...", data: success, status: 200})
        }
    })

}

// delete 

module.exports.deleteOrder = function(req, res){

    let orderId = req.params.orderId

    OrderModel.deleteOne({"_id": orderId}, function(err, success){
        if(err){
            res.json({ msg: "Something went wrong in order delete!!!", data: err, status: -1})
        } else {
            res.json({ msg: "Order deleted ...", data: success, status: 200})
        }
    })
}

// update

module.exports.updateOrder = function(req, res){

    let orderId = req.body.orderId
    let total = req.body.total

    OrderModel.updateOne({"_id": orderId}, {total: total}, function(err, success){
        if(err){
            res.json({ msg: "Something went wrong in order update!!!", data: err, status: -1})
        } else {
            res.json({ msg: "order updated ...", data: success, status: 200})
        }
    })

}
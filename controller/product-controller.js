const ProductModel = require("../model/product-model")

// add

module.exports.addProduct = function(req, res){

    let productName = req.body.productName
    // base price 

    // foreign key 
    let category = req.body.category
    let subcategory = req.body.subcategory
    let brand = req.body.brand

    let product = new ProductModel({

        productName :productName,
        // foreign key 
        category: category,
        subcategory: subcategory,
        brand: brand

    })

    product.save(function(err, success){
        if(err){
            res.json({msg:"SWR product add!", data: success, status: -s})
        } else {
            res.json({msg:"product added", data: success, status : 200})
        }
    })
}

// list

module.exports.getAllProducts = function(req, res){
    
    ProductModel.find().populate().exec(function(err, success){
        if(err){
            res.json({ msg: "SWR in product list", data: err, status: -1 })
        } else {
            res.json({ msg:"Product ret...", data: success, status: 200 })
        }
    })
}

// delete

module.exports.deleteProduct = function(req, res){

    let productId = req.params.productId

    ProductModel.deleteOne({"_id": productId}, function(err, success){
        if(err){
            res.json({ msg: "SWR in product delete", data: err, status: -1 })
        } else {
            res.json({ msg:"Product deleted...", data: success, status: 200 })
        } 
    })
}

// update

module.exports.updateProducts = function(req, res){

    let productId = req.body.productId
    let productName = req.body.productName

    ProductModel.updateOne({"_id": productId},{productName: productName}, function(err, success){
        if(err){
            res.json({ msg: "SWR in Product update", data: err, status: -1 })
        } else {
            res.json({ msg:"Product updated...", data: success, status: 200 })
        } 
    })

}

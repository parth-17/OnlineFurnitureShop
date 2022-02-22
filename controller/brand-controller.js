const BrandModel = require("../model/brand-model")

//add

module.exports.addBrand = function(req, res){

    let brandName = req.body.brandName

    let brand = new BrandModel({
        brandName : brandName
    })

    brand.save(function(err, success){
        if(err){
            res.json({msg: "SMR in brand", data: success, status: -1})
        } else {
            res.json({msg: "Brand Added", data: success, status: 200})
        }
    })
}

//list

module.exports.getAllBrands = function(req, res){

    BrandModel.find(function(err,success){
        if(err){
            res.json({msg: "SMR in getAllbrand", data: success, status: -1})
        } else {
            res.json({msg: "Brand shown", data: success, status: 200})
        }
    })

}


//delete

module.exports.deleteBrand = function(req, res){
    
    let brandId = req.params.brandId

    BrandModel.deleteOne({"_id" : brandId},function(err, success){
        if(err){
            res.json({msg: "SMR in delete brand", data: success, status: -1})
        } else {
            res.json({msg: "Brand deleted", data: success, status: 200})
        }
    })
}


//update

module.exports.updateBrand = function(req, res){
    let brandId = req.body.brandId
    let brandName = req.body.brandName
    BrandModel.updateOne({"_id": brandId}, {brandName: brandName},function(err, success){
        if(err){
            res.json({msg:"SWR in update brand",data :err, status:-1})
        }else{
             res.json({msg:"Brand updated...",data :success, status:200})
        }        
    })
}
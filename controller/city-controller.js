const CityModel = require("../model/city-model")

//add

module.exports.addCity = function(req, res){

    let cityName = req.body.cityName

    let state = req.body.state

    let city = new CityModel({

        cityName : cityName,
        state : state

    })

    city.save(function(err, success){
        if(err){
            res.json({msg: "SMW in city controller", data: success, status: -1})
        } else {
            res.json({msg: "City Added", data: success, status: 200})
        }
    })
}

//list

module.exports.getAllCities = function(req,res){
    
    CityModel.find().populate("state").exec(function(err,success){
        if(err){
            res.json({msg:"Something went wrong!!!",data:err,status:-1})
        }else{
            res.json({msg:"Cities ret...",data:success,status:200})
        }
    })
}

//delete

module.exports.deleteCity = function(req, res){
    
    let cityId = req.params.cityId
    
    CityModel.deleteOne({"_id": cityId}, function(err, success){
        if(err){
            res.json({msg:"Something went wrong in delete city!!!",data:err,status:-1})
        }else{
            res.json({msg:"City removed",data:success,status:200})
        }
    })

}

//update

module.exports.updateCity = function(req, res){

    let paramcityId = req.body.cityId
    let paramcityName = req.body.cityName

    CityModel.updateOne({"_id": paramcityId}, {cityName: paramcityName}, function(err, success){
        if(err){
            res.json({msg:"Something went wrong in update city!!!",data:err,status:-1})
        } else {
            res.json({msg:"City updated",data:success,status:200})
        }
    })

}
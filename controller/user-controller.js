const UserModel = require("../model/user-model")

//add [Post]
module.exports.addUser = function(req,res){

    let firstName = req.body.firstName
    let email = req.body.email
    let password = req.body.password
    let role = req.body.role

    let user = new UserModel({
        //firstName : req.body.firstName,
        firstName : firstName,
        email : email,
        password : password,
        role : role
    })

    user.save(function(err,success){
        if(err){
            res.json({msg:"Something went wrong!!!",data:err,status:-1})
        }else{
            res.json({msg:"Signup Done...",data:success,status:200})
        }
    })
    
}

//list

module.exports.getAllUsers = function(req,res){
    
    UserModel.find().populate("role").exec(function(err,success){
        if(err){
            res.json({msg:"Something went wrong!!!",data:err,status:-1})
        }else{
            res.json({msg:"Users ret...",data:success,status:200})
        }
    })
}


//delete

module.exports.deleteUser = function(req,res){
    //params userId
    let userId = req.params.userId //postman userid
    
    UserModel.deleteOne({_id:userId},function(err,success){
        if(err){
            res.json({msg:"Something went wrong!!!",data:err,status:-1})
        }else{
            res.json({msg:"Users removed...",data:success,status:200})
        }
    })
}

//update
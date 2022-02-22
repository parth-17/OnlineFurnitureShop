const bcrypt = require("bcrypt")
const UserModel = require("../model/user-model")

//add [Post]
module.exports.addUser = function(req,res){

    let firstName = req.body.firstName
    let email = req.body.email
    let password = req.body.password
    //encrypt

    let encPassword = bcrypt.hashSync(password,10)

    let role = req.body.role

    let user = new UserModel({
        //firstName : req.body.firstName,
        firstName : firstName,
        email : email,
        password : encPassword,
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
    
    UserModel.deleteOne({"_id":userId},function(err,success){
        if(err){
            res.json({msg:"Something went wrong!!!",data:err,status:-1})
        }else{
            res.json({msg:"Users removed...",data:success,status:200})
        }
    })
}

//update
module.exports.updateUser = function(req,res){
    
    let paramuserId = req.body.userId
    let paramuserName = req.body.userName
    let paramemail = req.body.email
    let parampassword = req.body.password
    //let role = req.body.role

    UserModel.updateOne({_id:paramuserId},{userName:paramuserName,email:paramemail,password:parampassword},/*{role:role}*/function(err,success){
        if(err){
            res.json({ msg:"Something went wrong!!!",data:err, status:-1 })
        }else{
            res.json({ msg:"Users Updated...", status:200, data:success})
        }
        
    })
}

//login
module.exports.login = function(req,res){

    let param_email = req.body.email
    let param_password = req.body.password
    let isCorrect = false;

    UserModel.findOne({email:param_email},function(err,success){
        if(success){
            let ans = bcrypt.compareSync(param_password,success.password)
            if(ans == true){
                isCorrect = true
            }
        }
        if(isCorrect == false){
            res.json({ msg:"Invalid Credentials!!!",data: req.body, status: -1 })
        }else{
            res.json({ msg:"Login successful...", status: 200, data: success})
        }
    })

}
const RoleModel = require("../model/role-model")


module.exports.addRole = function (req,res){
    //db insert role
    console.log(req.body.roleName);
    
    let role = new RoleModel({
        roleName:req.body.roleName
    })
    
    role.save(function(err,success){
        if(err){
            res.json({msg: "something went wrong",status : -1, data:req.body})

        } else{
            res.json({msg: "role added",status : 200, data:success})
        }   
    })
  
}


module.exports.getAllRoles = function(req,res){
    RoleModel.find(function(err,success){
        if(err){
            res.json({ msg:"something went wrong!!!",data:err, status:-1 })
        }else{
            res.json({ msg:"roles ret..", status:200, data:success })
        }
    })
}

module.exports.deleteRole = function(req,res){
    let roleId = req.params.roleId

    //delete from role where roleId =1
    RoleModel.deleteOne({"_id":roleId},function(err,success){
    if(err){
        res.json({ msg:"something went wrong!!!",data:err, status:-1 })
    }else{
        res.json({ msg:"removed...", status:200, data:success})
    }
})
}
//roleName

module.exports.updateRole = function(req,res){
    
    let roleId = req.body.roleId
    let roleName = req.body.roleName
    RoleModel.updateOne({_id:roleId},{roleName:roleName},function(err,success){
        if(err){
            res.json({ msg:"Something went wrong!!!",data:err, status:-1 })
        }else{
            res.json({ msg:"Roles Updated...", status:200, data:success})
        }
        //done
    })
}
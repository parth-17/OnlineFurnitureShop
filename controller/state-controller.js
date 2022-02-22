const StateModel= require("../model/state-model")

//add

module.exports.addState = function(req, res){

    let stateName = req.body.stateName

    let state = new StateModel({
        stateName : stateName
    })

    state.save(function(err, success){
        if(err){
            res.json({msg: "SMR in state", data: success, status: -1})
        } else {
            res.json({msg: "State Added", data: success, status: 200})
        }
    })
}

//list

module.exports.getAllStates = function(req, res){

    StateModel.find(function(err,success){
        if(err){
            res.json({msg: "SMR in getAllStates", data: success, status: -1})
        } else {
            res.json({msg: "State shown", data: success, status: 200})
        }
    })

}

//delete

module.exports.deleteState = function(req, res){
    
    let stateId = req.params.stateId

    StateModel.deleteOne({"_id" : stateId},function(err, success){
        if(err){
            res.json({msg: "SMR in delete state", data: success, status: -1})
        } else {
            res.json({msg: "State deleted", data: success, status: 200})
        }
    })
}


//update

module.exports.updateState = function(req, res){
    let stateId = req.body.stateId
    let stateName = req.body.stateName
    StateModel.updateOne({"_id": stateId}, {stateName: stateName},function(err, success){
        if(err){
            res.json({msg:"SWR in update state",data :err, status:-1})
        }else{
             res.json({msg:"State updated...",data :success, status:200})
        }        
    })
}
const StateModel = require("../model/state-model")
const StatusModel = require("../model/status-model")

// add 

module.exports.addStatus = function(req, res){
    
    let status = req.body.status

    let Status = new StatusModel({

        status: status,

    })

    Status.save(function(err,success){
        if(err){
            res.json({ msg: "SWR in status Add", data: err, status: -1})
        } else {
            res.json({ msg: "status Added.....", data: success, status: 200})
        }
    })
}

// list 

module.exports.getAllStatus = function(req, res){
    
    StatusModel.find().populate().exec(function(err, success){
        if(err){
            res.json({ msg: "SWR in status list", data: err, status: -1})
        } else {
            res.json({ msg: "Status ret.....", data: success, status: 200})
        }
    })
}

// delete

module.exports.deleteStatus = function(req, res){
    
    let statusId = req.params.statusId
    
    StatusModel.deleteOne({"_id": statusId}, function(err, success){
        if(err){
            res.json({ msg: "SWR in status delete", data: err, status: -1})
        } else {
            res.json({ msg: "Status deleted.....", data: success, status: 200})
        }
    })
}

// update 

module.exports.updateStatus = function(req, res){
    
    let statusId = req.body.statusId
    let status = req.body.status
    
    StatusModel.updateOne({"_id": statusId}, {status: status}, function(err, success){
        if(err){
            res.json({ msg: "SWR in status delete", data: err, status: -1})
        } else {
            res.json({ msg: "Status deleted.....", data: success, status: 200})
        }
    })

}
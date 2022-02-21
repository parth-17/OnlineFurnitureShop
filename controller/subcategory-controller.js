const CategoryModel = require("../model/category-model");
const SubcategoryModel = require("../model/subcategory-model");
//const UserModel = require("../model/user-model");

//add
module.exports.addSubcategories = function(req, res){

    //console.log(req.body.subCategoryName);

    let subcategoryName = req.body.subcategoryName
    let category = req.body.category


    let subcategory = new subcategoryModel({
        subcategoryName : subcategoryName,
        category : category
    })

    subcategory.save(function(err,success){
        if(err){
            res.json({msg: "Something went wrong in sub category!!!", data: err, status: -1})
        } else {
            res.json({msg: "Subcategory Done...", data:success, status: 200})
        }
    })
}

// list
module.exports.getAllSubcategories = function(req, res) {
    
    SubcategoryModel.find().populate("category").exec(function(err,success){
        if(err) {
            res.json({msg:"Something went wrong!!!",data:err,status:-1})
        } else {
            res.json({msg:"Users ret...",data:success,status:200})
        }
    })
}

// delete
module.exports.deleteSubcategories = function(req, res) {
    // params Subcategoryid 
    let subcategoryId = req.params.subcategoryId // postman -> userid 

    SubcategoryModel.deleteOne({"_id": subcategoryId},function (err, success) {
        if (err) {
            res.json({ msg: "Something went wrong in subcategory delete", data: err, status: -1 }) // -1  [ 302 404 500 ]
        } else {
            res.json({ msg: "subcategory removed...", data: success, status: 200 })//http status code 
        }
    })
}

// update 
module.exports.updateSubcategories = function(req, res) {
     
    let subcategoryId = req.body.subcategoryId 
    let subcategoryName = req.body.subcategoryName
    let category = req.body.category

    SubcategoryModel.updateOne({_id:subcategoryId},{subcategoryName:subcategoryName, category: category},function(err,success){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:" subcategory updated...",status:200,data:success})
        }
    })
}
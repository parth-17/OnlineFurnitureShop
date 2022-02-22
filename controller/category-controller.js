const CategoryModel = require("../model/category-model")

//add [post]
module.exports.addCategory = function(req,res){
    
    let categoryName = req.body.categoryName
    
    let category= new CategoryModel({
        categoryName:categoryName
    })

    category.save(function(err,success){
        if(err){
            res.json({msg:"SWR in category",data :err, status:-1})
        }else{
            res.json({msg:"Category Added...",data :success, status:200})
        }
    })
    
}

//list
module.exports.getAllCategories = function(req,res){
    
    CategoryModel.find(function(err,success){
        if(err){
            res.json({msg:"SWR in get  all category",data :err, status:-1})
        }else{
            res.json({msg:"Category ret...",data :success, status:200})
        }
    })
    
}

//delete
module.exports.deleteCategory = function(req,res){
    
    let categoryId = req.params.categoryId
    
    CategoryModel.deleteOne({"_id": categoryId},function(err,success){
        if(err){
            res.json({msg:"SWR in delete category",data :err, status:-1})
        }else{
           res.json({msg:"Category removed...",data :success, status:200})
        }
    })    
}
    
//update
module.exports.updateCategory = function(req,res){
        
    let categoryId = req.body.categoryId
    let categoryName = req.body.categoryName
    CategoryModel.updateOne({_id:categoryId},{categoryName:categoryName},function(err,success){
        if(err){
            res.json({msg:"SWR in update category",data :err, status:-1})
        }else{
             res.json({msg:"Category updated...",data :success, status:200})
        }
     })
}
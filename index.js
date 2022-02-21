const express = require("express")
const mongoose = require("mongoose")

const sessionController = require("./controller/session-controller")
const roleController = require("./controller/role-controller")
const userController = require("./controller/user-controller")
const categoryController = require("./controller/category-controller")
const SubcategoryController = require("./controller/subcategory-controller")
const BrandController = require("./controller/brand-controller")

const app = express()
//middle ware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//database
mongoose.connect('mongodb://localhost:27017/OFS',function(err){
  if(err){
    console.log("db connection fail..");
    console.log(err);
  }else{
    console.log("db connected..");
  }
})

//urls

app.get("/",function(req,res){
    res.write("welcome...")
    res.end()
})

          
app.get("/login", sessionController.login)
app.get("/signup", sessionController.signup) 
app.post("/saveUser", sessionController.saveUser)

//role

app.post("/roles", roleController.addRole)
app.get("/roles", roleController.getAllRoles)
app.delete("/roles/:roleId", roleController.deleteRole)
app.put("/roles", roleController.updateRole)

//user

app.post("/users", userController.addUser)
app.get("/users", userController.getAllUsers)
app.delete("/users/:userId", userController.deleteUser)
app.put("/users", userController.updateUser)
app.post("/login",userController.login)

//category

app.post("/categories", categoryController.addCategory)
app.get("/categories", categoryController.getAllCategories)
app.delete("/categories/:categoryId", categoryController.deleteCategory)
app.put("/categories", categoryController.updateCategory)
 
//subcategory

app.post("/subcategories", SubcategoryController.addSubcategories)
app.get("/subcategories", SubcategoryController.getAllSubcategories)
app.delete("/subcategories/:subcategoryId", SubcategoryController.deleteSubcategories)
app.put("/subcategories", SubcategoryController.updateSubcategories)

//brand

app.post("/brands", BrandController.addBrand)
app.get("/brands", BrandController.getAllBrands)
app.delete("/brands/:brandId", BrandController.deleteBrand)
app.put("/brands", BrandController.updateBrand)


//server
app.listen(3000,function(){
  console.log("server started on 3000");  
})
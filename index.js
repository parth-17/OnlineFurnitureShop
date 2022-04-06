const express = require("express");
const mongoose = require("mongoose");

const sessionController = require("./controller/session-controller");
const roleController = require("./controller/role-controller");
const userController = require("./controller/user-controller");
const categoryController = require("./controller/category-controller");
const SubcategoryController = require("./controller/subcategory-controller");
const BrandController = require("./controller/brand-controller");
const StateController = require("./controller/state-controller");
const CityController = require("./controller/city-controller");
const VendorDetailsController = require("./controller/vendorDetails-controller");
const CustomerAddressController = require("./controller/customerAddress-controller");
const ProductController = require("./controller/product-controller");
const VendorProductController = require("./controller/vendorProduct-controller");
const CartController = require("./controller/cart-controller");
const StatusController = require("./controller/status-controller");
const OrderController = require("./controller/order-controller");
const OrderDetailController = require("./controller/orderDetail-controller");
const products = require("./data/products");

const { PermContactCalendar } = require("@material-ui/icons");

const app = express();
var cors = require("cors");
app.use(cors());

//products
app.get("/productss", (req, res) => {
  res.json(products);
});

app.get("/productss/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

//middle ware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//database

mongoose.connect("mongodb://localhost:27017/OFS", function (err) {
  if (err) {
    console.log("db connection fail..");
    console.log(err);
  } else {
    console.log("db connected..");
  }
});

//urls

app.get("/", function (req, res) {
  res.write("welcome...");
  res.end();
});

app.get("/login", sessionController.login);
app.get("/signup", sessionController.signup);
app.post("/saveUser", sessionController.saveUser);

//role

app.post("/roles", roleController.addRole);
app.get("/roles", roleController.getAllRoles);
app.delete("/roles/:roleId", roleController.deleteRole);
app.put("/roles", roleController.updateRole);

//user

app.post("/users", userController.addUser);
app.get("/users", userController.getAllUsers);
app.delete("/users/:userId", userController.deleteUser);
app.put("/users", userController.updateUser);
app.post("/login", userController.login);

//category

app.post("/categories", categoryController.addCategory);
app.get("/categories", categoryController.getAllCategories);
app.delete("/categories/:categoryId", categoryController.deleteCategory);
app.put("/categories", categoryController.updateCategory);

//subcategory

app.post("/subcategories", SubcategoryController.addSubcategories);
app.get("/subcategories", SubcategoryController.getAllSubcategories);
app.delete(
  "/subcategories/:subcategoryId",
  SubcategoryController.deleteSubcategories
);
app.put("/subcategories", SubcategoryController.updateSubcategories);

//brand

app.post("/brands", BrandController.addBrand);
app.get("/brands", BrandController.getAllBrands);
app.delete("/brands/:brandId", BrandController.deleteBrand);
app.put("/brands", BrandController.updateBrand);

//state

app.post("/states", StateController.addState);
app.get("/states", StateController.getAllStates);
app.delete("/states/:stateId", StateController.deleteState);
app.put("/states", StateController.updateState);

//city

app.post("/cities", CityController.addCity);
app.get("/cities", CityController.getAllCities);
app.delete("/cities/:cityId", CityController.deleteCity);
app.put("/cities", CityController.updateCity);

//vendorDetails

app.post("/vendorDetails", VendorDetailsController.addVendor);
app.get("/vendorDetails", VendorDetailsController.getAllVendors);
app.delete("/vendorDetails/:vendorId", VendorDetailsController.deleteVendor);
app.put("/vendorDetails", VendorDetailsController.updateVendorDetails);

// customerAddress

app.post("/customerAddress", CustomerAddressController.addCustomerAddress);
app.get("/customerAddress", CustomerAddressController.getAllCustomerAddress);
app.delete(
  "/customerAddress/:customerAddressId",
  CustomerAddressController.deleteCustomerAddress
);
app.put("/customerAddress", CustomerAddressController.updateCustomerAddress);

// product

app.post("/products", ProductController.addProduct);
app.get("/products", ProductController.getAllProducts);
app.delete("/products/:productId", ProductController.deleteProduct);
app.put("/products", ProductController.updateProducts);

// vendor product details

app.post("/vendorProducts", VendorProductController.addVendorProduct);
app.get("/vendorProducts", VendorProductController.getAllVendorProducts);
app.delete(
  "/vendorProducts/:vendorProductId",
  VendorProductController.deleteVendorProduct
);
app.put("/vendorProducts", VendorProductController.updateVendorProduct);

// cart
app.post("/carts", CartController.addCart);
app.get("/carts", CartController.getAllCart);
app.delete("/carts/:cartId", CartController.deleteCart);
app.put("/carts", CartController.updateCart);

// status

app.post("/status", StatusController.addStatus);
app.get("/status", StatusController.getAllStatus);
app.delete("/status/:statusId", StatusController.deleteStatus);
app.put("/status", StatusController.updateStatus);

// order
app.post("/orders", OrderController.addOrder);
app.get("/orders", OrderController.getAllOrders);
app.delete("/orders/:orderId", OrderController.deleteOrder);
app.put("/orders", OrderController.updateOrder);

// orderDetail
app.post("/orderDetails", OrderDetailController.addOrderDetail);
app.get("/orderDetails", OrderDetailController.getAllOrderDetails);
app.delete(
  "/orderDetails/:orderDetailId",
  OrderDetailController.deleteOrderDetail
);
app.put("/orderDetails", OrderDetailController.updateOrderDetail);

//server

app.listen(4000, function () {
  console.log("server started on 4000");
});

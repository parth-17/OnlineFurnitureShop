const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const ProductSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  //upper review added
  reviews: [reviewSchema],
  rating: {
    type: Number,
    required: true,
  },
  numReviews: {
    type: Number,
    required: true,
  },
  Price: {
    type: Number,
    required: true,
    default: 0.0,
  },
  countInStock: {
    type: Number,
    required: true,
  },

  // foreign key
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "category",
  },
  subcategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "subcategory",
  },
  brand: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "brand",
  },
});

const ProductModel = mongoose.model("products", ProductSchema);
module.exports = ProductModel;

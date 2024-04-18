import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
  title: String,
  description: String,
  tags: Array,
  img: String,
  created: Date,
  ends: Date,
  bidCount: Number,
  currentHighestBid: Number,
  price: Number,
  minimumBid: Number,
  shipping: String,
  category: String,
});

const Product = mongoose.model("products", productsSchema);

export default Product;

import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  tags: Array,
  img: String,
  created: Date,
  ends: { type: Date, required: true },
  bidCount: Number,
  currentHighestBid: Number,
  price: String,
  minimumBid: Number,
  shipping: String,
  category: String,
});

const Product = mongoose.model("products", productsSchema);

export default Product;

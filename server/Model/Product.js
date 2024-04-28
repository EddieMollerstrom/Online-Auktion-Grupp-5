import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  tags: Array,
  img: String,
  created: Date,
  ends: { type: Date, required: true },
  bids: {
    type: [
      {
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "users",
        },
        bidAmount: { type: Number, default: 0 },
      },
    ],
    default: [],
  },
  price: String,
  minimumBid: Number,
  shipping: String,
  category: String,
});

const Product = mongoose.model("products", productsSchema);

export default Product;

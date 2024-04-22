import mongoose from "mongoose";

const bidsSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  bidAmount: {
    type: Number,
  },
});

const Bid = mongoose.model("bids", bidsSchema);

export default Bid;

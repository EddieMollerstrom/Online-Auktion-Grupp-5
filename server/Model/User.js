import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  bids: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Bid",
    },
  ],
});

const User = mongoose.model("users", usersSchema);

export default User;

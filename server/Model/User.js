import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  savedProducts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'products' }]
});

const User = mongoose.model("users", usersSchema);

export default User;

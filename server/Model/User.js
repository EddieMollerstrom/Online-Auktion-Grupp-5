import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

const User = mongoose.model("users", usersSchema);

export default User;

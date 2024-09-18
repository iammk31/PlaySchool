import mongoose from "mongoose";

const loginAdminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const LoginAdmin = mongoose.model("LoginAdmin", loginAdminSchema);

export default LoginAdmin;
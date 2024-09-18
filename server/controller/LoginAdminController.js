import LoginAdmin from "../models/LoginAdmin.js";

export const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await LoginAdmin.findOne({ email });

    if (admin) {
      res.json({
        _id: admin._id,
        email: admin.email,
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export default loginAdmin;

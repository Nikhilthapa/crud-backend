const bcrypt = require("bcrypt");
const User = require("../model/userModel");
const singupUser = async (req, res) => {
  // console.log(process.env.TEST);
  try {
    let { name, phone, email, password } = req.body;
    if (!name) return res.status(200).json("name not present");
    if (!phone) return res.status(200).json("phone is not present");
    if (!email) return res.status(200).json("email not present");
    if (!password) return res.status(200).json("password not inserted");
    let userEmail = await User.findOne({ email });
    if (userEmail) return res.status(200).json("email already exist");
    let salt = await bcrypt.genSalt(10);
    let hashpass = await bcrypt.hash(password, salt);
    console.log(name, email);
    let user = await User.create({ name, phone, email, password: hashpass });
    res.status(200).json({ message: "user signup sucessfully", data: user });
  } catch (error) {
    console.log("error", error.message);
  }
};
module.exports = singupUser;

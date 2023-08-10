const User = require("../model/userModel");
const { verifyJWT } = require("../utiles");
const verifyUser = async (req, res, next) => {
  try {
    const header = await req.header("Au thorization");
    if (!header) return res.status(400).json("header not present");
    const token = header.split(" ")[1];
    if (!token || token == "undefined") {
      return res.status(400).json("token are invalid");
    }
    let verifytoken = verifyJWT(token);
    const user = await User.findById(verifytoken.id);
    req.user = user;
    next();
  } catch (error) {
    console.log("error", error.message);
  }
};

module.exports = verifyUser;

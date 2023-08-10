const bcrypt = require("bcrypt");
const User = require("../model/userModel");
const { signJWT } = require("../utiles");

const login = async (req, res, next) => {
  try {
    let { email, password } = req.body;
    let user = await User.findOne({ email });
    if (!user) return res.status(400).json("email does not exist");

    let passwordmatch = await bcrypt.compare(password, user.password);
    if (!passwordmatch) return res.status(200).json("invalid credintials");
    let token = signJWT(user._id);
    // console.log(token);
    res
      .status(200)
      .json({
        status: true,
        message: "login sucessful",
        data: { token, user },
      });
  } catch (error) {
    next(error);
  }
};
module.exports = login;

const jwt = require("jsonwebtoken");

const verifyJWT = (token) => {
  try {
    const verify = jwt.verify(token, process.env.JWT_SECRET_KEY);
    return verify;
  } catch (error) {
    console.log("error", error.message);
  }
};
module.exports = verifyJWT;

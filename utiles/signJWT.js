const jwt = require("jsonwebtoken");

const signJWT = (id) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET_KEY);
  return token;
};
module.exports = signJWT;

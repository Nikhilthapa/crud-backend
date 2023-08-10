const baseUrl = require("./base");
const signJWT = require("./signJWT");
const verifyJWT = require("./verifyJWT");

module.exports = {
  signJWT: signJWT,
  verifyJWT: verifyJWT,
  baseUrl: baseUrl,
};

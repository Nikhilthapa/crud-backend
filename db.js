const mongooose = require("mongoose");

async function connectToDB() {
  try {
    await mongooose.connect("mongodb://127.0.0.1:27017/nikhil");
    console.log("DB connected");
    Promise.resolve();
  } catch (error) {
    console.log("error", error.message);
    Promise.reject();
  }
}
module.exports = connectToDB;

require("dotenv").config();
const connectToDB = require("./db");
const express = require("express");
let app = express();
app.use(express.json());

app.use("/", require("./routers/userRoutes"));

async function func() {
  await connectToDB();
  app.listen(3005, () => console.log("port running on 3005"));
}
func();

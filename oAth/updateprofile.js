const fs = require("fs");
const multer = require("multer");
const { baseUrl } = require("../utiles");

// const itemtype = ["image/png", "image/jpeg", "image/jpg", "image/webp"];

const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    if (!fs.existsSync("public")) fs.mkdirSync("public");
    cb(null, "public");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({
  storage,
  limit: { fileSize: 10 * 1024 * 1024 },
  //   filefilter:(file,cb)=>{}
}).single("image");

const updateprofile = async (req, res) => {
  upload(req, res, async (error) => {
    try {
      if (error) return res.status(400).json("multer error");

      const user = req.user;
      let oldImage = req.user.profile_image;
      let { name, phone, email } = req.body;
      if (name) user.name = name;
      if (phone) user.phone = phone;
      if (email) user.email = email;
      if (req.file) {
        user.profile_image = baseUrl() + "/" + req.file.filename;
      }
      await user.save();
      deleteImageHandler(oldImage);
      res.status(200).json({
        status: true,
        message: "User details updated successfully!",
        data: user,
      });
    } catch (error) {
      console.log("Error", error.message);
    }
  });

  function deleteImageHandler(image) {
    if (!image) return;
    if (fs.existsSync(`public/${image.split("appdb/")[1]}`))
      fs.unlink(`public/${image.split("appdb/")[1]}`, (error) => {
        if (error) console.log(error.message);
        console.log("image deletion suessful");
      });
  }
};

module.exports = updateprofile;

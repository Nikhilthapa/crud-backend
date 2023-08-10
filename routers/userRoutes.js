const router = require("express").Router();

const { verifyUser } = require("../middleware");
const profiledetail = require("../oAth/Userprofile");
const updateprofile = require("../oAth/updateprofile");
const login = require("../oAth/userLogin");
const signupUser = require("../oAth/userSignup");

router.post("/signUp", signupUser);
router.post("/login", login);

router.get("/profile", verifyUser, profiledetail);

router.put("/profile", verifyUser, updateprofile);
module.exports = router;

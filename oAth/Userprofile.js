const profiledetail = (req, res) => {
  try {
    console.log(req.user);
    res.status(200).json({ status: true, data: req.user });
  } catch (error) {
    res.status(400).json("can not fetch the user");
  }
};
module.exports = profiledetail;

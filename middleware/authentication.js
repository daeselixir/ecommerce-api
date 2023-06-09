const CustomErr = require("../errors");
const { isTokenValid } = require("../utils");

const authenticateUser = async (req, res, next) => {
  const token = req.signedCookies.token;
  console.log(req);

  if (!token) {
    console.log("error , no token present");
  } else {
    console.log("token present");
  }

  next();
};

module.exports = {
  authenticateUser,
};

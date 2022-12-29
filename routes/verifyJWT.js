const jwt = require("jsonwebtoken");
const User = require("../model/User");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      if (err) res.status(403).json("Token is not valid!");
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("You are not authenticated!");
  }
};

const verifyAuth = async (req, res, next) => {
  const user = await User.findOne({ id: req.body._id });
  if (user._id === req.params.id || user.isAdmin) {
    next();
  } else {
    res.status(403).json("You are not allowed to do that!");
  }
};

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not allowed to do that!");
    }
  });
};

module.exports = {
  verifyToken,
  verifyTokenAndAdmin,
  verifyAuth,
};

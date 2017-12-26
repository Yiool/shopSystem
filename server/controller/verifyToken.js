const jwt = require("jsonwebtoken");
const config = require("../config/index.js");

const verifyToken = function(req, res, next) {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];
  // 从body或query或者header中获取token
  jwt.verify(token, config.secret, function(err, decode) {
    if (err) {
      //  时间失效的时候/ 伪造的token
      res.sendStatus(401);
    } else {
      next();
    }
  });
};

module.exports = verifyToken;

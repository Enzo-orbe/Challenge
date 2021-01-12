const express = require("express");
const jwt = require("jsonwebtoken");
const router = express();

//Generate JWT (Token)
router.post("/", (req, res) => {
  const { id, name, email, password } = req.body;
  const user = {
    id,
    name,
    email,
    password,
  };

  const token = jwt.sign(
    {
      data: user,
    },
    process.env.SECRET_WORD,
    { expiresIn: "1h" }
  );

  res.json({ token: token });
});

//Verify Token Exist
router.post("/test", verifyToken, (req, res) => {
  jwt.verify(req.token, process.env.SECRET_WORD, (error, auth) => {
    if (error) {
      res.sendStatus(403);
    } else {
      res.json({
        msg: "Process successfully",
        auth,
      });
    }
  });
});

//function verifyToken
function verifyToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== undefined) {
    const bearerToken = bearerHeader.split(" ")[1];
    req.token = bearerToken;
    next();
  } else {
    res.status(403).json({ msg: "Token invalid" });
  }
}

module.exports = router;

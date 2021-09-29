const router = require("express").Router();

router.route("/").get((req, res) => {
  res.json({ message: "hello there" });
  //   res.send("hi there");
});

module.exports = router;

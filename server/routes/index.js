const router = require("express").Router();
const apiRouter = require("./api");

// router.route("/").get((req, res) => {
//   res.send("hello from route");
// });

router.use("/api", apiRouter);

module.exports = router;

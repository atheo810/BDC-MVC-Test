const { Router } = require("express");
const bookRouter = require('./book.router');

const router = Router();

router.get("/", (req, res) => {
  res.status(200).json({ msg: "Server connected" });
});

router.use(bookRouter);

module.exports = router;
const { Router } = require("express");

const auth = require("../middlewares/auth");

const bookRouter = require("./book.router");
const authRouter = require("./auth.router");
const categoryRouter = require("./category.router");

const router = Router();

// router.use(authRouter);
// router.use(auth);

router.get("/", (req, res) => {
  res.render("pages/index");
});

router.use(bookRouter);
router.use(categoryRouter);

module.exports = router;

const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.render("pages/index");
});

router.get("/", (req, res) => {
  res.render("pages/about");
});

router.use((req, res, next) => {
    res.status(404).render("pages/404")
});

module.exports = router;
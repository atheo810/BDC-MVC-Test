const passport = require("../lib/passport");

class AuthController {
  static async loginPage(req, res) {
    if (req.isAuthenticated()) res.redirect("/");
    res.render("pages/login");
  }

  static async login(req, res, next) {
    passport.authenticate("local", {
      successRedirect: "/",
      failureRedirect: "/login",
      failureFlash: "Wrong password or username",
    })(req, res, next);
  }

  static async logout(req, res) {
    req.logout(function (err) {
      if (err) {
        return next(err);
      }
      res.redirect("/login");
    });
  }
}

module.exports = AuthController;
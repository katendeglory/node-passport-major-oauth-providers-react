const auth = {
  isAuth: (req, res, next) => {
    if (req.isAuthenticated()) next();
    else res.redirect("/");
  },
  isAdmin: (req, res, next) => {
    if (req.user.role === 'Admin') next();
    else res.redirect("/");
  },
}

module.exports = auth;
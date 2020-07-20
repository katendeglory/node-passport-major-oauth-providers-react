const auth = {
  isAuth: (req, res, next) => {
    if (req.isAuthenticated()) next();
    else res.status(401).json({ message: "You are not logged in" });
  },
  isAdmin: (req, res, next) => {
    if (req.isAuthenticated() && req.user.role === 'Admin') next();
    else res.status(401).json({ message: "You are not authorized to view this ressource, Admin privileges required" });
  },
}

module.exports = auth;
export function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    console.log("Authenticated:", req.isAuthenticated());
    return next();
  } else {
    console.log("Not Authenticated:", req.isAuthenticated());
    return res.status(401).json({ message: "Unauthorized, please log in" });
  }
}

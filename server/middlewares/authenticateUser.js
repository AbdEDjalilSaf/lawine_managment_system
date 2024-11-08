import passport from "passport";

export const authenticateUser = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "An error occurred during login" });
    }
    if (!user) {
      // 'info' contains the message property
      return res.status(401).json({ message: info.message });
    }
    req.logIn(user, (err) => {
      if (err) {
        return res.status(500).json({ message: "Failed to log in" });
      }
      return res.status(200).json({
        message: "Login successful",
        user: {
          id: user.id,
          fullName: user.fullName,
          email: user.email,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
        },
      });
    });
  })(req, res, next);
};

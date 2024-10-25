export const logoutUser = (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({ message: "Logout failed", error: err });
    }

    // Destroy the session
    req.session.destroy((err) => {
      if (err) {
        return res
          .status(500)
          .json({ message: "Failed to destroy session", error: err });
      }
      return res.status(200).json({
        message: "Logout successful",
      });
    });
  });
};

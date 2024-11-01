export function getCurrentUser(req, res) {
  return res.status(200).json({
    user: {
      id: req.user.id,
      fullName: req.user.fullName,
      email: req.user.email,
      createdAt: req.user.createdAt,
      updatedAt: req.user.updatedAt,
    },
  });
}

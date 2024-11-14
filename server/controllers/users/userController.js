import userService from "../../services/userService.js";

class UserController {
  loginUser(req, res) {
    return res.status(200).json({
      status: "success",
      user: req.user,
    });
  }

  async registerUser(req, res) {
    const { fullName, email, password } = req.body;
    try {
      const newUser = await userService.registerUser(fullName, email, password);
      return res.status(201).json({
        message: "Registration successful",
        user: {
          id: newUser.id,
          fullName: newUser.fullName,
          email: newUser.email,
          createdAt: newUser.createdAt,
          updatedAt: newUser.updatedAt,
        },
      });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  async logoutUser(req, res) {
    req.logout((err) => {
      if (err) {
        return res.status(500).json({ message: "Logout failed", error: err });
      }
      req.session.destroy((err) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "Failed to destroy session", error: err });
        }
        return res.status(200).json({ message: "Logout successful" });
      });
    });
  }

  // async loginWithGoogle(req, res) {
  //   const { accessToken, refreshToken, profile } = req.body;
  //   try {
  //     const user = await usSeuserService.loginWithGoogle(profile);
  //     return res
  //       .status(200)
  //       .json({ message: "Login with Google successful", user });
  //   } catch (error) {
  //     return res.status(400).json({ message: error.message });
  //   }
  // }
}
const userController = new UserController();
export default userController;

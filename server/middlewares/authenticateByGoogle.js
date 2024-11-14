import User from "../models/userModel.js";
import userUtils from "../utils/user/userUtils.js";
export const authenticateByGoogle = async (
  accessToken,
  refreshToken,
  profile,
  cb
) => {
  try {
    const [user, created] = await User.findOrCreate({
      where: { googleId: profile.id },
      defaults: {
        fullName: profile._json.name,
        email: profile._json.email,
        password: userUtils.generateRandomPassword(),
      },
    });

    return cb(null, user);
  } catch (error) {
    return cb(error);
  }
};

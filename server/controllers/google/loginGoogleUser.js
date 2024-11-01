import User from "../../models/users.js";
import { generateRandomPassword } from "../../utils/generateRandomPassword.js";
export const loginGoogleUser = async (
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
        password: generateRandomPassword(),
      },
    });

    return cb(null, user);
  } catch (error) {
    return cb(error);
  }
};

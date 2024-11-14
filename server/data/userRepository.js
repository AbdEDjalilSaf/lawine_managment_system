import User from "../models/userModel.js";
import userUtils from "../utils/user/userUtils.js";
class UserRepository {
  async findUserByEmail(email) {
    return await User.findOne({ where: { email } });
  }

  async findUserByGoogleId(googleId) {
    return await User.findOne({ where: { googleId } });
  }

  async createUser(data) {
    return await User.create(data);
  }

  async findOrCreateUserByGoogleProfile(profile) {
    return await User.findOrCreate({
      where: { googleId: profile.id },
      defaults: {
        fullName: profile._json.name,
        email: profile._json.email,
        password: userUtils.generateRandomPassword(),
      },
    });
  }
}
const userRepository = new UserRepository();
export default userRepository;

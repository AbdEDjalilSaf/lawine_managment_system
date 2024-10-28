import GoogleUser from "../../models/googleUsers.js";
export const loginGoogleUser = async (
  accessToken,
  refreshToken,
  profile,
  cb
) => {
  try {
    const [user, created] = await GoogleUser.findOrCreate({
      where: { googleId: profile.id },
      defaults: {
        fullName: profile._json.name,
        email: profile._json.email,
      },
    });

    console.log(`User has been ${created ? "created" : "found"}`);
    return cb(null, user);
  } catch (error) {
    console.error("Error during Google login:", error);
    return cb(error);
  }
};

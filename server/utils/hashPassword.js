import bcrypt from "bcrypt";
const SALT_ROUND = 10;

export const hashPassword = async (plainPassword) => {
  try {
    const salt = await bcrypt.genSalt(SALT_ROUND);
    const hashedPassword = await bcrypt.hash(plainPassword, salt);
    return hashedPassword;
  } catch (error) {
    console.log("failed hasing :", error);
    throw error;
  }
};

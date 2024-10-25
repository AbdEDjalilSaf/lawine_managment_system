import bcrypt from "bcrypt";

export const isPasswordMatch = async (plainPassword, hashedPassword) => {
  const isPasswordMatch = await bcrypt.compare(plainPassword, hashedPassword);
};

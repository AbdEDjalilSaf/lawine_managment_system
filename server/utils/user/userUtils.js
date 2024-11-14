class UserUtils {
  async hashPassword(plainPassword) {
    try {
      const salt = await bcrypt.genSalt(SALT_ROUND);
      const hashedPassword = await bcrypt.hash(plainPassword, salt);
      return hashedPassword;
    } catch (error) {
      console.log("failed hasing :", error);
      throw error;
    }
  }
  generateRandomPassword() {
    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const symbols = "!@#$%^&*()_+-=[]{};':\"\\|,.<>/?";
    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";

    // Ensuring the required character types are included
    let password = "";
    password +=
      uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    // Fill the remaining characters with a mix of allowed types
    const allCharacters =
      uppercaseLetters + lowercaseLetters + numbers + symbols;
    for (let i = 0; i < 6; i++) {
      password +=
        allCharacters[Math.floor(Math.random() * allCharacters.length)];
    }

    // Shuffle the password to randomize character positions
    password = password
      .split("")
      .sort(() => Math.random() - 0.5)
      .join("");
    return password;
  }
  validateEmailPattern(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
  validatePasswordPattern(password) {
    const pattern =
      /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?=.{8,})/;
    return pattern.test(password);
  }
}

const userUtils = new UserUtils();
export default userUtils;

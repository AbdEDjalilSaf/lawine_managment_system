export const validatePasswordPattern = (password) => {
  // Example: Minimum 6 characters, at least one letter and one number
  return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password);
};

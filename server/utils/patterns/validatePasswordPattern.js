export const validatePasswordPattern = (password) => {
  const pattern =
    /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?=.{8,})/;
  return pattern.test(password);
};

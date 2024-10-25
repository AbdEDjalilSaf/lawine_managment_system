import passport from "passport";

export const authenticateUser = passport.authenticate("local");

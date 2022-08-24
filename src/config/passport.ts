import { Request, Response, NextFunction } from "express";
import passport from "passport";
import { BasicStrategy } from "passport-http";
import { UserService } from "../services/UserServices";

const notAuthorize = { status: 401, message: 'Não autorizado'};

passport.use(new BasicStrategy(async (email, password, done) => {
  if(email && password) {
    const user = await UserService.findUser({email, password});
    if(user) {
      return done (null, user);
    }
  }
  return done(notAuthorize, false);
}));

export const privateRoute = (req: Request, res: Response, next: NextFunction) => {
  const authFunction = passport.authenticate('basic', (err, user) => {
    req.user = user;
    if(user) {
      next();
    } else {
      next(notAuthorize)
    }
  });
  authFunction(req, res, next);
};

export default passport;
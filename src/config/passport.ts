//Strategy JWT

/*import { Request, Response, NextFunction } from "express";
import passport from "passport";
import dotenv from 'dotenv';
import { Strategy as JWTStrategy, ExtractJwt } from "passport-jwt"; //renomear a lib para facilitar leitura.
import { PrismaClient } from "@prisma/client"; //banco de dados
import jwt from 'jsonwebtoken'; // gerar token


dotenv.config();

const prisma = new PrismaClient();

const notAuthorizaedJson = {status: 401, message: "Não autorizado."};
const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), //Por onde mandar o token PADRÃO
  secretOrKey: process.env.JWR_SECRET as string
}

passport.use(new JWTStrategy(options, async (payload, done) => {
  const user = await prisma.user.findFirst(payload.id); //buscar meu banco de dados
  if(user) {
    return done(null, user);
  } else {
    return done(notAuthorizaedJson, false);
  }
}));

export const generateToken = (data: object) => {
  return jwt.sign(data, process.env.JWR_SECRET as string);
};

export const privateRoute = (req: Request, res: Response, next: NextFunction) => {
  const authFunction = passport.authenticate('jwt', (err, user) => {
    if(user) {
      next();
    } else {
      next(notAuthorizaedJson);
    }
  });
  authFunction(req, res, next);
};

export default passport;
*/
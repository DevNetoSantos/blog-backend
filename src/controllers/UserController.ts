import { Request, Response } from "express";
//import { generateToken } from "../config/passport";
import { UserService } from "../services/UserServices";

export const register = async (req: Request, res: Response) => {
  const { name, email, password, role} = req.body;
  if(name && email && password && role ) {
    const hasUser = await UserService.findOne({email});
    if(!hasUser) {
      const newUser = await UserService.createUser({
        name, email, password, role
      });
      //const token = generateToken({id: newUser.id});
      if(newUser) {
        res.status(201).json({id: newUser.id});
      }
    } else {
      res.status(401).json({error: 'este email já existe, tente novamente'});
    }
  } else {
    res.status(401).json({error: 'preencha todos os dados'});
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await UserService.findOne({id: parseInt(id)});
  if(user) {
    await UserService.removeUser(parseInt(id));
    res.status(200).json({status: 'true'});
  } else {
    res.status(401).json({error: 'usuário não encontrado'});
  }
};

export const indexUsers = async (req: Request, res: Response) => {
  const users = await UserService.findAllUsers();
  res.status(200).json(users);
};

export const login = async (req: Request, res: Response) => {
  res.status(201).json({status: true});
};

export const logout = (req: Request, res: Response) => {
  res.status(200).json({logout: true});
}; 
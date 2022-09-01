import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type findOneDataProps = {
  id?: number;
  email?: string;
};

type findUserDataProps = {
  email: string;
  password: string;
};

type createUserDataProps = {
  name: string;
  email: string;
  password: string;
  role: string;
};

type createProfileDataProps = {
  bio: string;
  userId: number;
};

type createImageDataProps = {
  url: string;
  idPost: number
}

export const UserService = {
  findAllUsers: async () => {
    return await prisma.user.findMany({
      orderBy: {
        id: 'desc'
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      }
    });
  },
  findOne: async (data: findOneDataProps) => {
    return await prisma.user.findUnique({
      where: data
    });
  },
  findUser: async (data: findUserDataProps) => {
    return await prisma.user.findFirst({
      where: {
        email: data.email,
        password: data.password
      }
    });
  },
  createUser: async (data: createUserDataProps) => {
    return await prisma.user.create({data});
  },
  removeUser: async (id: number) => {
    return await prisma.user.delete({where: {id}});
  },
};
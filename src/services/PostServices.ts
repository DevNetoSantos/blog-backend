import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type createDataProps = {
  title: string;
  body: string;
  authorId: number;
  categoryId: number;
  imageId: number
};

type updatePostDataProps = {
  title?: string;
  body?: string;
  authorId?: number;
  published?: boolean;
};

export const PostService = {
  findAllPosts: async () => {
    return await prisma.post.findMany({
      where: {
        published: true
      },
      orderBy: {
        id: 'desc'
      }
    });
  },

  findOnePost: async (id: number) => {
    return await prisma.post.findUnique({where: {id}});
  },
  createPost: async (data: createDataProps) => {
    return await prisma.post.create({data});
  },

  updateToggle: async (id: number, data: updatePostDataProps) => {
    return await prisma.post.update({
      where: {id}, data 
    });
  },

  deletarPost: async (id: number) => {
    return await prisma.post.delete({where: {id}});
  },

  createCategory: async (name: string) => {
    return await prisma.category.create({data: {name}});
  },

  findAllCategory: async () => {
    return await prisma.category.findMany({
      select: {
        id: true,
        name: true
      },
      orderBy: {
        id: 'desc'
      }
    });
  },

  createNameImage: async (name: string) => {
    return await prisma.image.create({data: {name}});
  },
};
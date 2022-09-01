import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  await prisma.user.deleteMany({});
  await prisma.post.deleteMany({});
  await prisma.category.deleteMany({});
  await prisma.image.deleteMany({});

  const user = await prisma.user.create({
    data: {
      name: 'Raimundo Neto',
      email: 'neto@gmail.com',
      password: '12345',
      role: 'Repórter Política ',
    }
  });
  
  const category = await prisma.category.create({
    data: {
      name: 'Política',
    }
  });

  const image = await prisma.image.create({
    data: {
      name: '1662040445931.jpg'
    }
  });

  const post = await prisma.post.create({
    data: {
      title: "Meu primiero Post",
      authorId: user.id,
      body: 'Essa e minha primeira matéria do meu blog popular',
      published: true,
      categoryId: 1,
      imageId: 1
    }
  });
}

main();
import prisma from "@/lib/db/prisma";

export const getPosts = async () => {
  try {
    const posts = await prisma.post.findMany();
    return posts;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch posts");
  }
};

export const getPost = async (slug: string) => {
  try {
    const post = await prisma.post.findUnique({ where: { slug } });
    return post;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch post");
  }
};

export const getUsers = async () => {
  try {
    const users = await prisma.user.findMany();
    return users;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch users");
  }
};

export const getUser = async (userId: string) => {
  try {
    const user = await prisma.user.findUnique({ where: { id: userId } });
    return user;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch user");
  }
};

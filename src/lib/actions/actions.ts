"use server";

import { revalidatePath } from "next/cache";
import prisma from "../db/prisma";
import { signIn, signOut } from "../auth/auth";
import bcrypt from "bcryptjs";

export const addPost = async (previousState: any, formData: FormData) => {
  const title = formData.get("title")?.toString();
  const description = formData.get("description")?.toString();
  const slug = formData.get("slug")?.toString();
  const userId = formData.get("userId")?.toString();

  if (!title || !description || !slug) {
    return { error: "Missing required fields" };
  }

  await prisma.post.create({
    data: { title, description, slug, userId },
  });

  revalidatePath("/blog");
  revalidatePath("/admin");
};

export const deletePost = async (formData: FormData) => {
  const postId = formData.get("postId")?.toString();

  if (!postId) {
    throw Error("Missing required fields");
  }

  await prisma.post.delete({
    where: { id: postId },
  });

  revalidatePath("/blog");
  revalidatePath("/admin");
};

export const addUser = async (previousState: any, formData: FormData) => {
  const username = formData.get("username")?.toString();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const image = formData.get("image")?.toString();
  const isAdmin = formData.get("isAdmin")?.toString() === "true";

  if (!username || !email || !password) {
    throw Error("Missing required fields");
  }

  await prisma.user.create({
    data: { username, email, password, image, isAdmin },
  });

  revalidatePath("/admin");
};

export const deleteUser = async (formData: FormData) => {
  const userId = formData.get("userId")?.toString();

  if (!userId) {
    throw Error("Missing required fields");
  }

  await prisma.user.delete({
    where: { id: userId },
  });

  revalidatePath("/admin");
};

export const handleGithubLogin = async () => {
  await signIn("github");
};

export const handleLogout = async () => {
  await signOut();
};

export const register = async (previousState: any, formData: FormData) => {
  const username = formData.get("username")?.toString();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const passwordRepeat = formData.get("passwordRepeat")?.toString();

  if (!username || !email || !password) {
    return { error: "Missing required fields" };
  }

  if (password !== passwordRepeat) {
    return { error: "Passwords do not match" };
  }

  try {
    const user = await prisma.user.findUnique({ where: { email } });

    if (user) {
      return { error: "Username already exists" };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });
    return { success: true };
  } catch (error) {
    console.error(error);
    return { error: "Something went wrong" };
  }
};

export const login = async (previousState: any, formData: FormData) => {
  const username = formData.get("username")?.toString();
  const password = formData.get("password")?.toString();

  if (!username || !password) {
    return { error: "Missing required fields" };
  }

  try {
    await signIn("credentials", { username, password });
  } catch (error: any) {
    console.error(error);
    if (error.name === "CredentialsSignin") {
      return { error: "Invalid username or password" };
    }
    throw error;
  }
};

"use server";

import { revalidatePath } from "next/cache";
import prisma from "../db/prisma";
import { signIn, signOut } from "../auth/auth";

export const addPost = async (formData: FormData) => {
  const title = formData.get("title")?.toString();
  const description = formData.get("description")?.toString();
  const slug = formData.get("slug")?.toString();
  const userId = formData.get("userId")?.toString();

  if (!title || !description || !slug) {
    throw Error("Missing required fields");
  }

  await prisma.post.create({
    data: { title, description, slug, userId },
  });

  revalidatePath("/blog");
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
};

export const handleGithubLogin = async () => {
  await signIn("github");
};

export const handleLogout = async () => {
  await signOut();
};

import { z } from "zod";

export const createPostSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  image: z.string().optional(),
  slug: z.string().min(1),
  userId: z.string(),
});

export type createPostSchema = z.infer<typeof createPostSchema>;

export const updatePostSchema = createPostSchema.extend({
  id: z.string().min(1),
});

export const deletePostSchema = z.object({
  id: z.string().min(1),
});

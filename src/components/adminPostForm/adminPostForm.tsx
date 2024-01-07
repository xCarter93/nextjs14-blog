"use client";

import { addPost } from "@/lib/actions/actions";
import { useFormState } from "react-dom";

interface AdminPostFormProps {
  userId: string | undefined;
}

const AdminPostForm = ({ userId }: AdminPostFormProps) => {
  const [state, formAction] = useFormState(addPost, undefined);
  return (
    <div>
      <h1 className="mb-4 text-center text-3xl font-bold">Add New Post</h1>
      <form action={formAction}>
        <input type="hidden" name="userId" value={userId} />
        <input
          type="text"
          required
          name="title"
          placeholder="Title"
          className="input mb-3 w-full"
        />
        <input
          type="text"
          required
          name="slug"
          placeholder="Slug"
          className="input mb-3 w-full"
        />
        <input
          type="password"
          name="image"
          placeholder="Image"
          className="input  mb-3 w-full"
        />
        <textarea
          required
          placeholder="Description"
          name="description"
          className="textarea  mb-3 w-full"
          rows={3}
        ></textarea>

        <button className="btn btn-primary btn-block">Add Post</button>
      </form>
    </div>
  );
};
export default AdminPostForm;

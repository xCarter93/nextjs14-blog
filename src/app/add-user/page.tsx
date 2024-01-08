"use client";

import { addPost, deletePost } from "@/lib/actions/actions";
import { useFormState } from "react-dom";

export default function AddUserPage() {
  const [state, formAction] = useFormState(addPost, undefined);
  return (
    <div>
      <form action={formAction}>
        <input type="text" name="title" placeholder="title" />
        <input type="text" name="description" placeholder="description" />
        <input type="text" name="slug" placeholder="slug" />
        <input type="text" name="userId" placeholder="userId" />
        <button className="btn btn-success">Create Post</button>
      </form>
      {state?.error}

      <form action={deletePost}>
        <input type="text" name="postId" placeholder="postId" />

        <button className="btn btn-warning">Delete Post</button>
      </form>
    </div>
  );
}

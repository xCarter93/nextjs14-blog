import { addPost, deletePost } from "@/lib/actions/actions";

export default function AddUserPage() {
  return (
    <div>
      <form action={addPost}>
        <input type="text" name="title" placeholder="title" />
        <input type="text" name="description" placeholder="description" />
        <input type="text" name="slug" placeholder="slug" />
        <input type="text" name="userId" placeholder="userId" />
        <button className="btn btn-success">Create Post</button>
      </form>

      <form action={deletePost}>
        <input type="text" name="postId" placeholder="postId" />

        <button className="btn btn-warning">Delete Post</button>
      </form>
    </div>
  );
}

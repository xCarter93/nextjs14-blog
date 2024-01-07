import { deletePost } from "@/lib/actions/actions";
import { getPosts } from "@/lib/db/post";
import { Post } from "@prisma/client";

const PostTable = () => {
  return (
    <div className="w-full px-8">
      <Table />
    </div>
  );
};

const Table = async () => {
  const posts = await getPosts();

  return (
    <div className="mx-auto w-full overflow-x-auto rounded-lg bg-white shadow-lg">
      <table className="w-full">
        <thead>
          <tr className="border-b-[1px] border-slate-200 text-sm uppercase text-slate-400">
            <th className="p-4 text-start font-medium">Title</th>
            <th className="p-4 text-start font-medium">Body</th>
            <th className="p-4 text-center font-medium">Date Created</th>
            <th className="p-4 text-center font-medium">Delete Post</th>
          </tr>
        </thead>

        <tbody>
          {posts.map((post, index) => {
            return <TableRows key={post.id} post={post} index={index} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

interface TableRowsProps {
  post: Post;
  index: number;
}

const TableRows = ({ post, index }: TableRowsProps) => {
  return (
    <tr className={`text-sm ${index % 2 ? "bg-slate-100" : "bg-white"}`}>
      <td className="items-center p-4">
        <span className="line-clamp-1 font-medium">{post.title}</span>
      </td>

      <td className="items-center p-4">
        <span className={"line-clamp-1 font-medium"}>{post.description}</span>
      </td>
      <td className="p-4">
        <span className="text-nowrap font-medium">
          {post.updatedAt.toLocaleDateString("en-CA", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })}
        </span>
      </td>
      <td className="p-4">
        <div className="flex items-center justify-center">
          <form action={deletePost}>
            <input type="hidden" name="postId" value={post.id} />
            <button className="btn btn-outline btn-error btn-sm">Delete</button>
          </form>
        </div>
      </td>
    </tr>
  );
};

export default PostTable;

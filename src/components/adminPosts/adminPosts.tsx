import { auth } from "@/lib/auth/auth";
import AdminPostForm from "../adminPostForm/adminPostForm";
import PostTable from "../postTable/postTable";

const AdminPosts = async () => {
  const session = await auth();
  return (
    <div className="flex">
      <div className="mt-[52px] flex-1">
        <PostTable />
      </div>
      <div className="flex-1">
        <AdminPostForm userId={session?.user?.id} />
      </div>
    </div>
  );
};
export default AdminPosts;

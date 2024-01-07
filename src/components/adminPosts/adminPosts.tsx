import AdminPostForm from "../adminPostForm/adminPostForm";
import PostTable from "../postTable/postTable";

const AdminPosts = () => {
  return (
    <div className="flex">
      <div className="mt-[52px] flex-1">
        <PostTable />
      </div>
      <div className="flex-1">
        <AdminPostForm />
      </div>
    </div>
  );
};
export default AdminPosts;

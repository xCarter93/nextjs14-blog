import AdminPosts from "@/components/adminPosts/adminPosts";
import AdminUsers from "@/components/adminUsers/adminUsers";
import PostUser from "@/components/post-user/PostUser";
import ShuffleSortTable from "@/components/userTable/userTable";

export default function AdminPage() {
  return (
    <div className="flex flex-col gap-20">
      <AdminPosts />
      <div className="divider divider-primary"></div>
      <AdminUsers />
    </div>
  );
}

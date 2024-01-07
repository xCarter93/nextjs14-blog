import AdminUserForm from "../adminUserForm/adminUserForm";
import UsersTable from "../userTable/userTable";

const AdminUsers = () => {
  return (
    <div className="flex">
      <div className="mt-[52px] flex-1">
        <UsersTable />
      </div>
      <div className="flex-1">
        <AdminUserForm />
      </div>
    </div>
  );
};
export default AdminUsers;

import { deleteUser } from "@/lib/actions/actions";
import { getUsers } from "@/lib/db/post";
import { User } from "@prisma/client";
import Image from "next/image";

const UsersTable = () => {
  return (
    <div className="w-full px-8">
      <Table />
    </div>
  );
};

const Table = async () => {
  const users = await getUsers();

  return (
    <div className="mx-auto w-full max-w-4xl overflow-x-auto rounded-lg bg-white shadow-lg">
      <table className="w-full">
        <thead>
          <tr className="border-b-[1px] border-slate-200 text-sm uppercase text-slate-400">
            <th className="p-4 text-start font-medium">User</th>
            <th className="p-4 text-start font-medium">isAdmin</th>
            <th className="p-4 text-center font-medium">Delete User</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => {
            return <TableRows key={user.id} user={user} index={index} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

interface TableRowsProps {
  user: User;
  index: number;
}

const TableRows = ({ user, index }: TableRowsProps) => {
  return (
    <tr className={`text-sm ${index % 2 ? "bg-slate-100" : "bg-white"}`}>
      <td className="flex items-center gap-3 overflow-hidden p-4">
        <Image
          src={user.image || "/noavatar.png"}
          alt="Example user photo"
          className="h-10 w-10 shrink-0 rounded-full bg-slate-300 object-cover object-top"
          height={50}
          width={50}
        />
        <div>
          <span className="mb-1 block font-medium">{user.username}</span>
          <span className="block text-xs text-slate-500">{user.email}</span>
        </div>
      </td>

      <td className="p-4">
        <span
          className={`rounded px-2 py-1 text-xs font-medium ${
            user.isAdmin === true
              ? "bg-green-200 text-green-800"
              : user.isAdmin === false
                ? "bg-red-300 text-red-800"
                : "bg-slate-200 text-slate-800"
          }`}
        >
          {user.isAdmin.toString().toUpperCase()}
        </span>
      </td>
      <td className="p-4">
        <div className="flex items-center justify-center">
          <form action={deleteUser}>
            <input type="hidden" name="userId" value={user.id} />
            <button className="btn btn-outline btn-error btn-sm">Delete</button>
          </form>
        </div>
      </td>
    </tr>
  );
};

export default UsersTable;

"use client";

import { addUser } from "@/lib/actions/actions";
import { useFormState } from "react-dom";

const AdminUserForm = () => {
  const [state, formAction] = useFormState(addUser, undefined);
  return (
    <div>
      <h1 className="mb-4 text-center text-3xl font-bold">Add New User</h1>
      <form action={formAction}>
        <input
          type="text"
          required
          name="username"
          placeholder="Username"
          className="input mb-3 w-full"
        />
        <input
          type="text"
          required
          name="email"
          placeholder="Email address"
          className="input mb-3 w-full"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          className="input  mb-3 w-full"
        />
        <input
          type="text"
          name="image"
          placeholder="Profile Image"
          className="input mb-3 w-full"
        />
        <select name="isAdmin" className="select mb-3 w-full max-w-xs">
          <option value="false">Is Admin?</option>
          <option value="false">No</option>
          <option value="true">Yes</option>
        </select>

        <button className="btn btn-primary btn-block">Add User</button>
      </form>
    </div>
  );
};
export default AdminUserForm;

"use client";

import { handleGithubLogin, login } from "@/lib/actions/actions";
import { Github } from "lucide-react";
import Link from "next/link";
import { useFormState } from "react-dom";

const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);
  return (
    <div className="flex items-center justify-center">
      <div className="flex w-[500px] max-w-xl flex-col gap-4 rounded-lg bg-slate-700 p-14">
        <form
          className="flex w-full max-w-xl flex-col gap-4"
          action={formAction}
        >
          <input
            className="input"
            type="text"
            placeholder="Username"
            name="username"
          />

          <input
            className="input"
            type="password"
            placeholder="Password"
            name="password"
          />

          <button className="btn btn-primary">Login</button>
        </form>

        <form action={handleGithubLogin}>
          <button className="btn btn-outline btn-block">
            <Github />
            Login with Github
          </button>
          <div className="mt-4 flex items-center justify-center font-extrabold text-red-600">
            {state?.error}
          </div>
        </form>
        <div className="flex items-center justify-center">
          <Link className="link" href="/register">
            {"Don't have an account?"} <b>Register</b>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;

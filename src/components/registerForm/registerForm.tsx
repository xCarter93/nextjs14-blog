"use client";

import { register } from "@/lib/actions/actions";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

const RegisterForm = () => {
  const [state, formAction] = useFormState(register, undefined);

  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);
  return (
    <form className="flex w-full max-w-xl flex-col gap-4" action={formAction}>
      <input
        className="input"
        type="text"
        placeholder="Username"
        name="username"
      />
      <input className="input" type="email" placeholder="Email" name="email" />
      <input
        className="input"
        type="password"
        placeholder="Enter Password"
        name="password"
      />
      <input
        className="input"
        type="password"
        placeholder="Enter Password Again"
        name="passwordRepeat"
      />
      <button className="btn btn-primary btn-block">Register</button>
      <div className="flex items-center justify-center font-extrabold text-red-600">
        {state?.error}
      </div>

      <div className="flex items-center justify-center">
        <Link className="link" href="/login">
          Have an account? <b>Login</b>
        </Link>
      </div>
    </form>
  );
};
export default RegisterForm;

import RegisterForm from "@/components/registerForm/registerForm";

export default function RegisterPage() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex w-[500px] max-w-xl rounded-lg bg-slate-700 p-14">
        <RegisterForm />
      </div>
    </div>
  );
}

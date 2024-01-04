import { handleGithubLogin } from "@/lib/actions/actions";
import { signIn } from "@/lib/auth/auth";
import { Github } from "lucide-react";

export default function LoginPage() {
  return (
    <div>
      <form action={handleGithubLogin}>
        <button className="btn btn-primary">
          <Github />
          Login with Github
        </button>
      </form>
    </div>
  );
}

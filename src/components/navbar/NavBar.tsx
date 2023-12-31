import Link from "next/link";
import Links from "./links/Links";
import { auth } from "@/lib/auth/auth";

const NavBar = async () => {
  const session = await auth();

  return (
    <div className="flex h-20 items-center justify-between text-white">
      <div>
        <Link
          className="min-w-32 p-3 text-3xl font-extrabold hover:rounded-badge hover:bg-white hover:text-black"
          href="/"
        >
          Logo
        </Link>
      </div>
      <div>
        <Links session={session} />
      </div>
    </div>
  );
};

export default NavBar;

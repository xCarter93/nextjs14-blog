"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import NavLink from "./navLinks/navLinks";
import { useState } from "react";
import Image from "next/image";
import { handleLogout } from "@/lib/actions/actions";
import { auth } from "@/lib/auth/auth";
import { Session } from "next-auth";

interface LinksProps {
  session: Session | null;
}

const links: { id: number; title: string; path: string }[] = [
  {
    id: 0,
    title: "About",
    path: "/about",
  },
  {
    id: 1,
    title: "Contact",
    path: "/contact",
  },
  {
    id: 2,
    title: "Blog",
    path: "/blog",
  },
];
const Links = ({ session }: LinksProps) => {
  const [open, setOpen] = useState(false);
  // TEMPORARY
  const isAdmin: boolean = true;

  return (
    <div className="flex text-white">
      <div className="hidden gap-4 md:flex">
        {links.map((link) => {
          return <NavLink key={link.id} link={link} />;
        })}
        {session?.user ? (
          <>
            {session.user && (
              <NavLink link={{ title: "Admin", path: "/admin" }} />
            )}
            <form action={handleLogout}>
              <button className="btn btn-neutral">Logout</button>
            </form>
          </>
        ) : (
          <NavLink link={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="btn btn-sm flex md:hidden"
      >
        <Image src="/menu.png" alt="menu icon" width={20} height={20} />
      </button>
      {open && (
        <div className="absolute right-0 top-[100px] z-10 flex h-[calc(100vh-100px)] w-[50%] flex-col items-center justify-center border border-white bg-[#0b0b21]">
          {links.map((link) => {
            return <NavLink key={link.id} link={link} />;
          })}
          {session ? (
            <>
              {isAdmin && <NavLink link={{ title: "Admin", path: "/admin" }} />}
              <form action={handleLogout}>
                <button className="btn btn-neutral">Logout</button>
              </form>
            </>
          ) : (
            <NavLink link={{ title: "Login", path: "/login" }} />
          )}
        </div>
      )}
    </div>
  );
};

export default Links;

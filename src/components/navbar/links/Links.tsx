"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import NavLink from "./navLinks/navLinks";
import { useState } from "react";

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
const Links = () => {
  const [open, setOpen] = useState(false);
  // TEMPORARY
  const session: boolean = true;
  const isAdmin: boolean = true;

  return (
    <div className="flex">
      <div className="hidden gap-4 md:flex">
        {links.map((link) => {
          return <NavLink key={link.id} link={link} />;
        })}
        {session ? (
          <>
            {isAdmin && <NavLink link={{ title: "Admin", path: "/admin" }} />}
            <button className="btn btn-neutral">Logout</button>
          </>
        ) : (
          <NavLink link={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="btn btn-primary btn-sm flex rounded-badge md:hidden"
      >
        Menu
      </button>
      {open && (
        <div className="absolute right-0 top-[100px] flex h-[calc(100vh-100px)] w-[50%] flex-col items-center justify-center">
          {links.map((link) => {
            return <NavLink key={link.id} link={link} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Links;

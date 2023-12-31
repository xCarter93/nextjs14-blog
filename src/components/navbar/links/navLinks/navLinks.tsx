"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  link: { title: string; path: string };
}

const NavLink = ({ link }: NavLinkProps) => {
  const pathname = usePathname();
  return (
    <Link
      className={`${
        pathname === link.path ? "bg-white text-black" : ""
      } w-24 rounded-badge p-3 text-center font-bold hover:bg-white hover:text-black`}
      href={link.path}
    >
      {link.title}
    </Link>
  );
};

export default NavLink;

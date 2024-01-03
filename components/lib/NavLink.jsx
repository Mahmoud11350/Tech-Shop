"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const NavLink = ({ href, children }) => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  return (
    <Link
      href={href}
      className={`btn btn-block btn-ghost mb-2 capitalize  ${
        category == children ? " text-white bg-primary mb-1" : null
      }`}
    >
      {children}
    </Link>
  );
};
export default NavLink;

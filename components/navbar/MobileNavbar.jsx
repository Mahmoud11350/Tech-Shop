"use client";
import menuIcon from "@/assets/images/icons/menu.svg";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
const MobileNavbar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="md:hidden">
      <Image
        src={menuIcon}
        className="w-16 cursor-pointer"
        onClick={() => setVisible(!visible)}
      />
      <ul
        className={`flex text-white flex-col absolute top-20 w-screen z-20 bg-black/90  h-40 items-center justify-center transition-[all_1s] ${
          visible ? "left-0" : "-left-[100vw]"
        }`}
      >
        <li onClick={() => setVisible(!visible)}>
          <Link href={"/"} className="btn btn-ghost text-md capitalize">
            home
          </Link>
        </li>
        <li onClick={() => setVisible(!visible)}>
          <Link
            href={{
              pathname: "/products",
              query: {
                category: "all",
              },
            }}
            className="btn btn-ghost text-md capitalize"
          >
            shop{" "}
          </Link>
        </li>
        <SignedIn>
          <li className="text-white">
            <UserButton afterSignOutUrl="/" />
          </li>
        </SignedIn>
        <SignedOut>
          <li onClick={() => setVisible(!visible)}>
            <Link
              href={"/login"}
              className="btn btn-primary text-md capitalize"
            >
              login
            </Link>
          </li>
        </SignedOut>
      </ul>
    </div>
  );
};
export default MobileNavbar;

"use client";
import menuIcon from "@/assets/images/icons/menu.svg";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
const MobileNavbar = () => {
  const [visible, setVisible] = useState(true);
  return (
    <div className="md:hidden relative overflow-hidden">
      <Image src={menuIcon} onClick={() => setVisible(!visible)} />

      <ul
        className={`flex flex-col absolute  z-10 bg-accent w-screen h-40 right-0`}
      >
        <li>
          <Link href={"/"} className="btn btn-ghost text-md">
            home
          </Link>
        </li>
        <li>
          <Link href={"/products"} className="btn btn-ghost text-md">
            shop{" "}
          </Link>
        </li>
        <li>
          <Link href={"/"} className="btn btn-ghost text-md">
            login
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default MobileNavbar;

"use client";
import menuIcon from "@/assets/images/icons/menu.svg";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
const MobileNavbar = () => {
  const [visible, setVisible] = useState(true);
  return (
    <div className="md:hidden  ">
      <Image src={menuIcon} onClick={() => setVisible(!visible)} />

      <ul
        className={`flex flex-col absolute top-24 w-screen left-0  z-20 bg-accent/25  h-40 items-center justify-center transition-[all_1s] ${
          visible ? "left-0" : "-left-[100vw]"
        }`}
      >
        <li>
          <Link href={"/"} className="btn btn-ghost text-md capitalize">
            home
          </Link>
        </li>
        <li>
          <Link href={"/products"} className="btn btn-ghost text-md capitalize">
            shop{" "}
          </Link>
        </li>
        <li>
          <Link href={"/"} className="btn btn-primary text-md capitalize">
            login
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default MobileNavbar;

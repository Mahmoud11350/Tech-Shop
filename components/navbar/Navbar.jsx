import Link from "next/link";
import { IoBagHandleSharp } from "react-icons/io5";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  return (
    <nav className="relative">
      <div className="container flex h-[100px] justify-between items-center">
        <div className="uppercase font-bold text-2xl flex items-center gap-2">
          <IoBagHandleSharp className="" />
          tech shop
        </div>
        <MobileNavbar />
        <ul className=" gap-4 capitalize hidden md:flex">
          <li className="btn btn-ghost text-md">
            <Link href={"/"}>home</Link>
          </li>
          <li className="btn btn-ghost text-md">
            <Link href={"/products"}>shop </Link>
          </li>
          <li className="btn btn-primary text-md text-white">
            <Link href={"/"}>login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;

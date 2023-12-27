import Link from "next/link";
import { IoBagHandleSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="container flex h-[100px] justify-between items-center">
      <div className="uppercase font-bold text-2xl flex items-center gap-2">
        <IoBagHandleSharp className="" />
        tech shop
      </div>
      <ul className="flex gap-4 capitalize ">
        <li className="btn btn-ghost text-md">
          <Link href={"/"}>home</Link>
        </li>
        <li className="btn btn-ghost text-md">
          <Link href={"/"}>shop </Link>
        </li>
        <li className="btn btn-primary text-md text-white">
          <Link href={"/"}>login</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;

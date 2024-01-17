import Link from "next/link";
import { IoBagHandleSharp } from "react-icons/io5";
import MobileNavbar from "./MobileNavbar";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="relative">
      <div className="container flex h-[80px] justify-between items-center">
        <div className="uppercase font-bold text-2xl flex items-center gap-2">
          <IoBagHandleSharp className="" />
          tech shop
        </div>
        <MobileNavbar />
        <ul className=" gap-4 capitalize hidden md:flex items-center">
          <li className="btn btn-ghost text-md">
            <Link href={"/"}>home</Link>
          </li>
          <li className="btn btn-ghost text-md">
            <Link
              href={{
                pathname: "/products",
                query: {
                  category: "all",
                },
              }}
            >
              shop{" "}
            </Link>
          </li>
          <li>
            <SignedIn>
              <UserButton afterSignOutUrl="/" showName />
            </SignedIn>
          </li>
          <SignedOut>
            <li className="btn btn-primary text-md text-white">
              <Link href={"/sign-in"}>login</Link>
            </li>
          </SignedOut>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;

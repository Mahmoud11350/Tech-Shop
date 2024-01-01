import LoginForm from "@/components/login/LoginForm";
import Image from "next/image";
import registerImg from "@/assets/images/register.svg";

import Link from "next/link";

import React from "react";

const Login = () => {
  return (
    <div className="h-[calc(100vh-100px)] grid grid-cols-1 md:grid-cols-2 items-center gap-4">
      <div
        className="relative w-full h-full hidden md:block 
      "
      >
        <Image src={registerImg} alt="Login Header" className="rounded-lg" />
      </div>
      <div>
        <LoginForm />
        <div className="w-3/4">
          <ul className="flex mt-4 justify-between capitalize text-lg">
            <li>
              <Link href="/register">create an acoount ?</Link>
            </li>
            <li>
              <Link href="">forget password !</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Login;

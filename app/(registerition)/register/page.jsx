import Image from "next/image";
import registerImg from "@/assets/images/register.svg";
import Link from "next/link";
import RegisterForm from "@/components/register/RegisterForm";

import React from "react";

const Register = () => {
  return (
    <div className="h-[calc(100vh-100px)] grid grid-cols-1 md:grid-cols-2 items-center gap-4">
      <div
        className="relative w-full h-full hidden md:block 
      "
      >
        <Image
          src={registerImg}
          width="845"
          height="1024"
          alt="Login Header"
          className="rounded-lg"
        />
      </div>
      <div>
        <RegisterForm />

        <div className="w-3/4">
          <ul className="flex mt-4 justify-between capitalize text-lg ml-2">
            <li>
              <Link href="/login">Already Have an Acount !?</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Register;

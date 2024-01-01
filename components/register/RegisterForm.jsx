import Image from "next/image";
import React from "react";
import FormRow from "../lib/FormRow";
import Link from "next/link";

const RegisterForm = () => {
  return (
    <div className="px-4">
      <h1 className="text-4xl font-bold mb-2 capitalize">Create an account</h1>
      <p className="text-sm capitalize">please enter details</p>
      <form action="" className="w-full mt-4">
        <FormRow type={"text"} name={"name"} label={"full name"} />
        <FormRow type={"email"} name={"email"} label={"email adress"} />
        <FormRow type={"password"} name={"password"} label={"password"} />
        <FormRow
          type={"password"}
          name={"confirmPassword"}
          label={"confirm Password"}
        />
        <button className="btn btn-primary btn-wide  text-white text-lg mt-5">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;

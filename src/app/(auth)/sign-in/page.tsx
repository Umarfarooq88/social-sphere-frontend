import SignInForm from "@/components/form/SignInForm";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <p className="lg:text-3xl underline">Sign In</p>
      <SignInForm />
    </div>
  );
};

export default page;

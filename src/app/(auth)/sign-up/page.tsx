import SignUpForm from "@/components/form/SignUpForm";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <p className="lg:text-4xl underline space-y-10 ">Sign Up</p>
      <div className="flex flex-col justify-center gap-10">
        <SignUpForm />
      </div>
    </div>
  );
};

export default page;

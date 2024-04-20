import Spinner from "@/components/Spinner";
import React from "react";

const loading = () => {
  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <Spinner />
    </div>
  );
};

export default loading;

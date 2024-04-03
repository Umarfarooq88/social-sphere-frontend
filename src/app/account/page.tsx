import { isUserLoggedIn } from "@/lib/utils";
import React from "react";

const page = () => {
  isUserLoggedIn();
  return <div>page</div>;
};

export default page;

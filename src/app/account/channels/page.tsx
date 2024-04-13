"use client";
import { isUserLoggedIn } from "@/lib/utils";
import React, { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    isUserLoggedIn();
  }, []);
  return <div>Page</div>;
};

export default Page;

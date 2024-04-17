"use client";
import { isUserLoggedIn } from "@/lib/utils/utils";
import React, { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    const checkUser = async () => {
      isUserLoggedIn();
    };
    checkUser();
  }, []);
  return <div>Page</div>;
};

export default Page;

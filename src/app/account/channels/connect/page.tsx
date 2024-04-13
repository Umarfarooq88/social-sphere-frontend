"use client";
import React, { useEffect } from "react";
import AddChannelModal from "@/components/AddChannelModal";
import { isUserLoggedIn } from "@/lib/utils";

const Page = () => {
  useEffect(() => {
    const checkUser = async () => {
      isUserLoggedIn();
    };
    checkUser();
  }, []);

  return (
    <div>
      <AddChannelModal />
    </div>
  );
};

export default Page;

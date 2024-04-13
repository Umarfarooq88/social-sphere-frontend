"use client";
import React, { useEffect } from "react";
import AddChannelModal from "@/components/AddChannelModal";
import { isUserLoggedIn } from "@/lib/utils";

const Page = () => {
  useEffect(() => {
    isUserLoggedIn();
  }, []);

  return (
    <div>
      <AddChannelModal />
    </div>
  );
};

export default Page;

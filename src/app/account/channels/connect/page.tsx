"use client";
import React from "react";
import AddChannelModal from "@/components/AddChannelModal";
import { isUserLoggedIn } from "@/lib/utils";

const Page = () => {
  isUserLoggedIn();

  return (
    <div>
      <AddChannelModal />
    </div>
  );
};

export default Page;

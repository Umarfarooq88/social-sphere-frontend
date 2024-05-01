"use client";
import { isUserLoggedIn } from "@/lib/utils/utils";
import React, { useEffect, useState } from "react";
import Account from "@/components/account/Account";
import Sidebar from "@/components/account/Sidebar";
import Channel from "@/components/account/Channel";
const Page = () => {
  const [page, setPage] = useState("Account");

  const render = () => {
    switch (page) {
      case "Account":
        return <Account />;
      case "Channels":
        return <Channel />;
    }
  };
  useEffect(() => {
    const checkUser = async () => {
      isUserLoggedIn();
    };
    checkUser();
  }, []);
  return (
    <div className="pt-20 flex justify-between">
      <Sidebar
        className={"left-0 pt-10 h-screen absolute top-16"}
        setPage={setPage}
        selectedPage={page}
      />
      <div className="absolute left-80">{render()}</div>
    </div>
  );
};

export default Page;

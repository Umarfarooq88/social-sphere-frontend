import { cn } from "@/lib/utils/utils";
import React from "react";
import { IoGrid } from "react-icons/io5";
import { MdOutlineManageAccounts } from "react-icons/md";

const Sidebar = ({ className, setPage, selectedPage }: any) => {
  const onSelectStyle = `bg-blue-300 rounded-xl text-black dark:text-white dark:bg-blue-600`;
  return (
    <div
      className={cn(
        className,
        " fixed w-56 bg-stone-800 text-white dark:bg-zinc-800 dark:text-white"
      )}
    >
      <h1 className="lg:text-xl pl-2">Settings</h1>
      <ul className="flex flex-col">
        <li
          onClick={() => setPage("Account")}
          className={`w-[210px] flex hover:cursor-pointer justify-center px-3 py-2 items-center p-5 m-2 
          ${selectedPage === "Account" && onSelectStyle}`}
        >
          <MdOutlineManageAccounts className="mr-2" size={25} />
          <span className="text-xl">Account</span>
        </li>
        <li
          onClick={() => setPage("Channels")}
          className={`w-[210px] flex hover:cursor-pointer justify-center px-3 py-2 items-center p-5 m-2 
          ${selectedPage === "Channels" && onSelectStyle}`}
        >
          <IoGrid className="mr-2" size={25} />
          <span className="text-xl">Channels</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

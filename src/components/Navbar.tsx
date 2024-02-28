import Image from "next/image";
import React from "react";
import { ModeToggle } from "./ModeToggle";
import Avatar from "./Avatar";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center dark:text-white">
      <div className="m-1 p-1 max-w-10">
        <Image
          src="/logo/svg/logo-color.svg"
          alt="logo"
          width={100}
          height={50}
        />
      </div>
      <ul className="flex m-0 p-0 justify-between items-center list-none text-xl">
        <li className="ml-1 hover:dark:bg-yellow-300  hover:cursor-pointer  p-5">
          Publishing
        </li>
        <li className="ml-1 hover:dark:bg-yellow-300 hover:cursor-pointer  p-5">
          Analytics
        </li>
        <li className="ml-1 hover:dark:bg-yellow-300 hover:cursor-pointer  p-5">
          Engagement
        </li>
      </ul>
      <div className="flex justify-between items-center m-2">
        <div className="mr-2">
          <ModeToggle />
        </div>
        <Avatar
          email={"tah@gmail.com"}
          imageUrl={"/logo/svg/logo-color.svg"}
          altText={"user-profile"}
        />
      </div>
    </nav>
  );
};

export default Navbar;

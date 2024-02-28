"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ModeToggle } from "./ModeToggle";
import Avatar from "./Avatar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full bg-white dark:bg-zinc-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/logo/svg/logo-color.svg"
              alt="logo"
              width={50}
              height={50}
            />
          </div>

          {/* UL tags for larger screens */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <ul className="flex space-x-4 lg:text-xl">
              <li>
                <a
                  href="#"
                  className="text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition duration-300"
                >
                  Publishing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition duration-300"
                >
                  Analytics
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition duration-300"
                >
                  Engagement
                </a>
              </li>
            </ul>
          </div>

          {/* Hamburger menu for smaller screens */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition duration-300"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* ModeToggle and Avatar */}
          <div className="hidden md:flex items-center space-x-4">
            <ModeToggle />
            <Avatar
              email={"tah@gmail.com"}
              imageUrl={"/logo/svg/logo-color.svg"}
              altText={"user-profile"}
            />
          </div>
        </div>

        {/* Dropdown menu for smaller screens */}
        {isOpen && (
          <div className="md:hidden">
            <ul className="flex flex-col space-y-5 p-4">
              <li>
                <a href="#" className="block">
                  Publishing
                </a>
              </li>
              <li>
                <a href="#" className="block">
                  Analytics
                </a>
              </li>
              <li>
                <a href="#" className="block">
                  Engagement
                </a>
              </li>
            </ul>
            <div className="flex p-4">
              <ModeToggle />
              <Avatar
                email={""}
                imageUrl={"/logo/svg/logo-color.svg"}
                altText={"user-profile"}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

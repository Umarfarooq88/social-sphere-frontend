"use client";
import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "../theme/ModeToggle";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { theme } = useTheme();
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Team", href: "#team" },
    { name: "Services", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Faqs", href: "#faqs" },
  ];

  return (
    <nav className="container max-h-20 fixed bg-white dark:bg-[#000003] z-50 shadow-lg top-0 xl:left-14 flex flex-wrap items-center justify-between p-4 pb-10 mx-auto lg:justify-between ">
      {/* Logo  */}
      <div>
        {" "}
        <Link
          href="/"
          className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100"
        >
          {theme === "light" ? (
            <Image
              src="/logo-dark.png"
              alt="N"
              width="32"
              height="32"
              className="w-8"
            />
          ) : (
            <Image
              src="/logo-light.png"
              alt="N"
              width="32"
              height="32"
              className="w-8"
            />
          )}
          <span className="text-black dark:text-white">Social Sphere</span>
        </Link>
      </div>
      {/* menu  */}
      <div className="hidden text-center lg:flex lg:items-center">
        <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
          {navigation.map((menu, index) => (
            <li className="mr-3 nav__item" key={index}>
              <Link
                href={menu.href}
                className="inline-block  px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
              >
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="hidden mr-3 space-x-4 lg:flex nav__item">
        <Link
          href="/sign-up"
          className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5"
        >
          Get Started
        </Link>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;

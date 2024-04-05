import Image from "next/image";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { MdAccountCircle } from "react-icons/md";
import { GrChannel } from "react-icons/gr";
import { IoIosSettings } from "react-icons/io";
import { BiLogOut } from "react-icons/bi";
import { deleteUserCookies } from "@/lib/tokens";

interface AvatarProps {
  email: string | null | undefined;
  imageUrl: string;
  altText: string;
}

const Avatar = ({ email, imageUrl, altText }: AvatarProps) => {
  const [showMore, setShowMore] = useState(false);
  const router = useRouter();
  const handleLogout = () => {
    deleteUserCookies();
    router.push("/sign-in");
  };

  return (
    <>
      <div className="relative flex items-center hover:cursor-pointer">
        <p className="p-2">{email}</p>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="flex justify-between items-center">
              <Image
                src={imageUrl}
                width={45}
                height={45}
                alt={altText}
                className={`rounded-full`}
              />
              <FaChevronDown
                onClick={() => {
                  setShowMore(!showMore);
                }}
              />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => {
                router.push("/account");
              }}
            >
              <div className="flex justify-center items-center">
                <div className="pr-2">
                  <MdAccountCircle size={20} />
                </div>
                <p>Profile</p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                router.push("/account/channels");
              }}
            >
              <div className="flex justify-center items-center">
                <div className="pr-2">
                  <GrChannel size={20} />
                </div>
                <p>Channels</p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className="flex justify-center items-center">
                <div className="pr-2">
                  <IoIosSettings size={20} />
                </div>
                <p>Settings</p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout}>
              <div className="flex justify-center items-center">
                <div className="pr-2">
                  <BiLogOut size={20} />
                </div>
                <p>Logout</p>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
};

export default Avatar;

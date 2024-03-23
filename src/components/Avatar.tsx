import Image from "next/image";
import React from "react";
import { FaChevronDown } from "react-icons/fa6";

interface AvatarProps {
  email: string | null | undefined;
  imageUrl: string;
  altText: string;
}
const Avatar = ({ email, imageUrl, altText }: AvatarProps) => {
  return (
    <div className="flex items-center hover:cursor-pointer">
      <p className="p-2">{email}</p>
      <Image
        src={imageUrl}
        width={45}
        height={45}
        alt={altText}
        className={`rounded-full`}
      />
      <FaChevronDown />
    </div>
  );
};

export default Avatar;

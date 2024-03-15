import { Trash } from "lucide-react";
import Image from "next/image";
import React from "react";

interface IdeaCardProps {
  img: string;
  text: string;
}

const IdeaCard = ({ img, text }: IdeaCardProps) => {
  const handleDelete = () => {
    // Handle deletion logic here
    console.log("Delete clicked for image:", img);
  };

  return (
    <div className="max-w-sm max-h-80 rounded overflow-hidden shadow-lg border relative">
      {/* Trash Icon */}
      <div className="absolute top-0 right-0 mt-2 mr-2">
        <Trash
          size={30}
          color="white"
          cursor="pointer"
          className="bg-red-500 p-2 rounded-xl"
          onClick={handleDelete}
        />
      </div>

      {/* Image */}
      <div className="w-full object-fill px-5 py-5 bg-transparent">
        <Image
          className="w-full object-cover"
          src={img}
          alt={img}
          height={50}
          width={50}
        />
      </div>

      {/* Text */}
      <div className="px-6 py-4">
        <p className="text-gray-700 text-base line-clamp-6 text-pretty dark:text-white">
          {text}
        </p>
      </div>
    </div>
  );
};

export default IdeaCard;

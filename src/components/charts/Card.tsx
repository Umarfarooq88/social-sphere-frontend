import { cn } from "@/lib/utils/utils";
import React from "react";

const Card = ({ icon, title, number, className }: any) => {
  return (
    <div
      className={cn(
        "max-w-sm flex justify-between items-center border border-gray-300 rounded-xl p-5 shadow-lg shadow-gray-400 ",
        className
      )}
    >
      <div className="w-full h-full flex justify-center items-center">
        {/* Icons */}
        {icon}
      </div>
      <div className="flex m-5 flex-col justify-between items-start">
        <div className="text-md font-extrabold text-black dark:text-white">
          {/* Title */}
          {title}
        </div>
        <div className="font-light text-xl">
          {/* Numbers */}
          {number}
        </div>
      </div>
    </div>
  );
};

export default Card;
